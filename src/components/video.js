import React, { useState } from "react"

import Image from "../components/image"
import PB from "../../assets/play-button.svg"
import "./video.css"

const Video = ({ image, text, videoUrl }) => {
  const [hover, setHover] = useState(false)

  const renderHoverStates = () => {
    return hover
      ? <PB className={"play-button"}/>
      : <p className={"video-text"}>{text}</p>
  }


  return (
    <div onMouseEnter={() => setHover(true)}
         onMouseLeave={() => setHover(false)}
         onClick={() => window.open(videoUrl)}
         className={"video-container"}>
      <Image image={image} className={"video-image"}/>
      {
        window.innerWidth >= 450
          ? renderHoverStates()
          : <p className={"video-text"}>{text}</p>
      }
    </div>
  )
}

export default Video
