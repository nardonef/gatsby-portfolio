import React, { useRef, useEffect, useCallback } from "react"

// --- Simplex noise (2D) ---
// Compact implementation for organic motion
const GRAD = [[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]]
const PERM = new Uint8Array(512)
;(function seedPerm() {
  const p = []
  for (let i = 0; i < 256; i++) p[i] = i
  for (let i = 255; i > 0; i--) {
    const j = (i * 7 + 13) & 255
    const t = p[i]; p[i] = p[j]; p[j] = t
  }
  for (let i = 0; i < 512; i++) PERM[i] = p[i & 255]
})()

function noise2D(x, y) {
  const F2 = 0.5 * (Math.sqrt(3) - 1)
  const G2 = (3 - Math.sqrt(3)) / 6
  const s = (x + y) * F2
  const i = Math.floor(x + s)
  const j = Math.floor(y + s)
  const t = (i + j) * G2
  const x0 = x - (i - t)
  const y0 = y - (j - t)
  const i1 = x0 > y0 ? 1 : 0
  const j1 = x0 > y0 ? 0 : 1
  const x1 = x0 - i1 + G2
  const y1 = y0 - j1 + G2
  const x2 = x0 - 1 + 2 * G2
  const y2 = y0 - 1 + 2 * G2
  const ii = i & 255
  const jj = j & 255

  let n0 = 0, n1 = 0, n2 = 0
  let t0 = 0.5 - x0 * x0 - y0 * y0
  if (t0 > 0) {
    t0 *= t0
    const g = GRAD[PERM[ii + PERM[jj]] & 7]
    n0 = t0 * t0 * (g[0] * x0 + g[1] * y0)
  }
  let t1 = 0.5 - x1 * x1 - y1 * y1
  if (t1 > 0) {
    t1 *= t1
    const g = GRAD[PERM[ii + i1 + PERM[jj + j1]] & 7]
    n1 = t1 * t1 * (g[0] * x1 + g[1] * y1)
  }
  let t2 = 0.5 - x2 * x2 - y2 * y2
  if (t2 > 0) {
    t2 *= t2
    const g = GRAD[PERM[ii + 1 + PERM[jj + 1]] & 7]
    n2 = t2 * t2 * (g[0] * x2 + g[1] * y2)
  }
  return 70 * (n0 + n1 + n2)
}

// --- Color palette ---
// Cycles through these hues over time
const PALETTE = [
  [32, 178, 170],   // lightseagreen
  [102, 205, 170],  // mediumaquamarine
  [152, 251, 152],  // palegreen
  [0, 250, 154],    // mediumspringgreen
  [0, 206, 209],    // darkturquoise
  [72, 209, 204],   // mediumturquoise
]

function lerpColor(a, b, t) {
  return [
    a[0] + (b[0] - a[0]) * t,
    a[1] + (b[1] - a[1]) * t,
    a[2] + (b[2] - a[2]) * t,
  ]
}

function getColor(phase) {
  const t = ((phase % 1) + 1) % 1
  const idx = t * PALETTE.length
  const i = Math.floor(idx)
  const f = idx - i
  return lerpColor(PALETTE[i % PALETTE.length], PALETTE[(i + 1) % PALETTE.length], f)
}

// --- Vertex shader ---
const VERT = `
attribute vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`

// --- Fragment shader ---
// Computes metaballs per-pixel with smooth color blending
const FRAG = `
precision highp float;

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;
uniform float u_mouseActive;
uniform float u_reducedMotion;

// Up to 16 blobs: xy = position, z = radius, w = depth layer (0-1)
uniform vec4 u_blobs[16];
// Blob colors
uniform vec3 u_colors[16];
uniform int u_blobCount;

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  vec2 aspect = vec2(u_resolution.x / u_resolution.y, 1.0);
  vec2 pos = uv * aspect;

  float totalWeight = 0.0;
  vec3 color = vec3(0.0);

  for (int i = 0; i < 16; i++) {
    if (i >= u_blobCount) break;

    vec2 blobPos = u_blobs[i].xy * aspect;
    float radius = u_blobs[i].z;
    float depth = u_blobs[i].w;

    // Depth-based radius scaling
    float depthScale = 0.7 + depth * 0.6;
    float r = radius * depthScale;

    vec2 d = pos - blobPos;
    float dist2 = dot(d, d);

    // Metaball field contribution: r^2 / dist^2
    float field = (r * r) / (dist2 + 0.0001);
    totalWeight += field;
    color += field * u_colors[i];
  }

  // Threshold for metaball surface
  float threshold = 1.0;
  float edge = smoothstep(threshold - 0.3, threshold + 0.1, totalWeight);

  // Normalize color by total weight
  color = color / (totalWeight + 0.001);

  // Subtle glow at the edges
  float glow = smoothstep(threshold - 0.8, threshold - 0.1, totalWeight) * (1.0 - edge) * 0.4;
  vec3 glowColor = color * 0.6;

  // Background color: #003049
  vec3 bg = vec3(0.0, 0.188, 0.286);

  vec3 finalColor = mix(bg, color, edge) + glowColor * glow;

  // Subtle inner shading for depth
  float innerShade = smoothstep(threshold, threshold + 2.0, totalWeight);
  finalColor = mix(finalColor, finalColor * 1.15, innerShade * edge * 0.3);

  gl_FragColor = vec4(finalColor, 1.0);
}
`

// --- Blob definitions ---
// Each blob: base position offset, radius, speed multiplier, noise offset, depth layer
const BLOB_DEFS = [
  // Layer 0: background (large, slow, subtle)
  { r: 0.12, speed: 0.15, noiseOff: 0,   depth: 0.0, colorPhaseOff: 0.0 },
  { r: 0.10, speed: 0.12, noiseOff: 10,  depth: 0.1, colorPhaseOff: 0.15 },
  { r: 0.09, speed: 0.18, noiseOff: 20,  depth: 0.15, colorPhaseOff: 0.3 },

  // Layer 1: midground
  { r: 0.08, speed: 0.25, noiseOff: 30,  depth: 0.4, colorPhaseOff: 0.1 },
  { r: 0.07, speed: 0.30, noiseOff: 40,  depth: 0.5, colorPhaseOff: 0.25 },
  { r: 0.065, speed: 0.28, noiseOff: 50, depth: 0.55, colorPhaseOff: 0.4 },
  { r: 0.06, speed: 0.35, noiseOff: 60,  depth: 0.45, colorPhaseOff: 0.55 },

  // Layer 2: foreground (smaller, faster, more reactive)
  { r: 0.05, speed: 0.45, noiseOff: 70,  depth: 0.8, colorPhaseOff: 0.2 },
  { r: 0.045, speed: 0.50, noiseOff: 80, depth: 0.85, colorPhaseOff: 0.35 },
  { r: 0.04, speed: 0.55, noiseOff: 90,  depth: 0.9, colorPhaseOff: 0.5 },
  { r: 0.035, speed: 0.60, noiseOff: 100, depth: 1.0, colorPhaseOff: 0.65 },
]

const BLOB_COUNT = BLOB_DEFS.length

function BlobCanvas() {
  const canvasRef = useRef(null)
  const glRef = useRef(null)
  const programRef = useRef(null)
  const uniformsRef = useRef({})
  const mouseRef = useRef({ x: 0.5, y: 0.5, active: false })
  const smoothMouseRef = useRef({ x: 0.5, y: 0.5 })
  const rafRef = useRef(null)
  const reducedMotionRef = useRef(false)
  const scrollRef = useRef(0)

  const initGL = useCallback((canvas) => {
    const gl = canvas.getContext("webgl", {
      alpha: false,
      antialias: false,
      premultipliedAlpha: false,
    })
    if (!gl) return null

    // Compile shaders
    const vs = gl.createShader(gl.VERTEX_SHADER)
    gl.shaderSource(vs, VERT)
    gl.compileShader(vs)

    const fs = gl.createShader(gl.FRAGMENT_SHADER)
    gl.shaderSource(fs, FRAG)
    gl.compileShader(fs)

    if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
      console.error("Fragment shader error:", gl.getShaderInfoLog(fs))
      return null
    }

    const program = gl.createProgram()
    gl.attachShader(program, vs)
    gl.attachShader(program, fs)
    gl.linkProgram(program)
    gl.useProgram(program)

    // Full-screen quad
    const verts = new Float32Array([-1,-1, 1,-1, -1,1, 1,1])
    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, verts, gl.STATIC_DRAW)

    const aPos = gl.getAttribLocation(program, "a_position")
    gl.enableVertexAttribArray(aPos)
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0)

    // Cache uniform locations
    const uniforms = {
      resolution: gl.getUniformLocation(program, "u_resolution"),
      time: gl.getUniformLocation(program, "u_time"),
      mouse: gl.getUniformLocation(program, "u_mouse"),
      mouseActive: gl.getUniformLocation(program, "u_mouseActive"),
      reducedMotion: gl.getUniformLocation(program, "u_reducedMotion"),
      blobCount: gl.getUniformLocation(program, "u_blobCount"),
      blobs: [],
      colors: [],
    }
    for (let i = 0; i < 16; i++) {
      uniforms.blobs.push(gl.getUniformLocation(program, `u_blobs[${i}]`))
      uniforms.colors.push(gl.getUniformLocation(program, `u_colors[${i}]`))
    }

    glRef.current = gl
    programRef.current = program
    uniformsRef.current = uniforms
    return gl
  }, [])

  const resize = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const w = canvas.clientWidth
    const h = canvas.clientHeight
    canvas.width = w * dpr
    canvas.height = h * dpr
    if (glRef.current) {
      glRef.current.viewport(0, 0, canvas.width, canvas.height)
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Check reduced motion preference
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    reducedMotionRef.current = mq.matches
    const mqHandler = (e) => { reducedMotionRef.current = e.matches }
    if (mq.addEventListener) mq.addEventListener("change", mqHandler)

    const gl = initGL(canvas)
    if (!gl) return

    resize()
    window.addEventListener("resize", resize)

    // Mouse/touch tracking
    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: 1 - (e.clientY - rect.top) / rect.height,
        active: true,
      }
    }
    const onTouchMove = (e) => {
      const touch = e.touches[0]
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: (touch.clientX - rect.left) / rect.width,
        y: 1 - (touch.clientY - rect.top) / rect.height,
        active: true,
      }
    }
    const onMouseLeave = () => { mouseRef.current.active = false }

    // Scroll tracking for parallax
    const onScroll = () => { scrollRef.current = window.scrollY }

    canvas.addEventListener("mousemove", onMouseMove)
    canvas.addEventListener("touchmove", onTouchMove, { passive: true })
    canvas.addEventListener("mouseleave", onMouseLeave)
    window.addEventListener("scroll", onScroll, { passive: true })

    // Animation loop
    const startTime = performance.now()

    const render = () => {
      const t = (performance.now() - startTime) / 1000
      const uniforms = uniformsRef.current
      const reduced = reducedMotionRef.current

      gl.uniform2f(uniforms.resolution, canvas.width, canvas.height)
      gl.uniform1f(uniforms.time, t)
      gl.uniform1f(uniforms.reducedMotion, reduced ? 1.0 : 0.0)
      gl.uniform1i(uniforms.blobCount, BLOB_COUNT)

      // Smooth mouse interpolation
      const sm = smoothMouseRef.current
      const m = mouseRef.current
      const lerpFactor = 0.05
      sm.x += (m.x - sm.x) * lerpFactor
      sm.y += (m.y - sm.y) * lerpFactor

      gl.uniform2f(uniforms.mouse, sm.x, sm.y)
      gl.uniform1f(uniforms.mouseActive, m.active ? 1.0 : 0.0)

      // Parallax scroll offset (normalized)
      const scrollNorm = scrollRef.current / (window.innerHeight || 1)

      // Update each blob
      for (let i = 0; i < BLOB_COUNT; i++) {
        const def = BLOB_DEFS[i]
        const speed = reduced ? 0 : def.speed
        const off = def.noiseOff

        // Noise-driven position
        let bx = 0.5 + noise2D(t * speed * 0.4 + off, off * 0.7) * 0.3
        let by = 0.5 + noise2D(off * 0.7, t * speed * 0.4 + off + 100) * 0.25

        // Parallax: deeper layers move less with scroll
        const parallaxStrength = def.depth * 0.15
        by += scrollNorm * parallaxStrength

        // Mouse interaction: blobs are attracted toward cursor
        if (m.active && !reduced) {
          const dx = sm.x - bx
          const dy = sm.y - by
          const dist = Math.sqrt(dx * dx + dy * dy)
          // Foreground blobs react more strongly
          const attraction = def.depth * 0.15
          const influence = attraction / (1 + dist * 5)
          bx += dx * influence
          by += dy * influence
        }

        gl.uniform4f(uniforms.blobs[i], bx, by, def.r, def.depth)

        // Color: slow cycling with per-blob phase offset
        const colorPhase = (reduced ? 0 : t * 0.03) + def.colorPhaseOff
        const c = getColor(colorPhase)
        gl.uniform3f(uniforms.colors[i], c[0] / 255, c[1] / 255, c[2] / 255)
      }

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
      rafRef.current = requestAnimationFrame(render)
    }

    rafRef.current = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener("resize", resize)
      canvas.removeEventListener("mousemove", onMouseMove)
      canvas.removeEventListener("touchmove", onTouchMove)
      canvas.removeEventListener("mouseleave", onMouseLeave)
      window.removeEventListener("scroll", onScroll)
      if (mq.removeEventListener) mq.removeEventListener("change", mqHandler)
    }
  }, [initGL, resize])

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        height: "50vh",
        marginTop: "-25px",
        display: "block",
        zIndex: -100,
      }}
    />
  )
}

export default BlobCanvas
