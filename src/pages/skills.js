import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "./index.css"
import Goo from 'gooey-react'


const Skills = () => (
  <Layout>
    <SEO title="Home" />
    <div className={'container'}>
      <h3>I specialize in full stack web development and devops.</h3>
      <h3>From front end design to back-end infrastructure architecture and everything in between.</h3>
      <h3>Having worked on consumer facing sites and complex web apps.</h3>

      {/*<Goo className={'goo'}>*/}
      {/*  <svg className={'gooey-svg'}>*/}
      {/*    /!*<circle style={{ animation: 'left 4s linear infinite' }} cx="37%" cy="37%" fill="orchid" r="32" />*!/*/}
      {/*    /!*<circle cx="63%" cy="63%" fill="mediumorchid" r="32" />*!/*/}
      {/*    <g style={{animation: 'rotate_back 9s linear infinite'}}>*/}
      {/*      <circle cx="50%" cy="50%" r="42" fill="lightseagreen" style={{animation:'blob_four 12s ease-in-out -3s infinite alternate'}}/>*/}
      {/*      <circle cx="50%" cy="50%" r="36" fill="mediumaquamarine" style={{ animation:'blob_three 9s ease-in-out -3s infinite alternate'}}/>*/}
      {/*      <circle cx="50%" cy="50%" r="30" fill="palegreen" style={{ animation:'blob_two 6s ease-in-out -3s infinite alternate'}}/>*/}
      {/*      <circle cx="50%" cy="50%" r="24" fill="mediumspringgreen" style={{ animation:'blob_one 3s ease-in-out -3s infinite alternate'}}/>*/}
      {/*    </g>*/}
      {/*    /!*<circle cx="50%" cy="50%" r="42" fill="lightseagreen" style={{animation: '12s ease-in-out -3s infinite alternate none running blob_four'}}/>*!/*/}
      {/*    /!*<circle cx="50%" cy="50%" r="36" fill="mediumaquamarine" style={{animation: 'animation: 9s ease-in-out -3s infinite alternate none running blob_four'}}/>*!/*/}
      {/*    /!*<circle cx="50%" cy="50%" r="30" fill="palegreen" style={{animation: 'animation: 6s ease-in-out -3s infinite alternate none running blob_two'}}/>*!/*/}
      {/*    /!*<circle cx="50%" cy="50%" r="24" fill="mediumspringgreen" style={{animation: 'animation: 3s ease-in-out -3s infinite alternate none running blob_one'}}/>*!/*/}
      {/*  </svg>*/}
      {/*</Goo>*/}
    </div>
  </Layout>
)

export default Skills
