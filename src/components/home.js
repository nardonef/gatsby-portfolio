import React from "react"

import SEO from "../components/seo"
import "./home.css"
import Goo from 'gooey-react'

const Home = () => {

  return (
    <>
      <SEO title="Home" />
        <div className={'home-container'}>
          <h1 className={'margin-top'}>Frank Nardone</h1>
          <h2>Designer and Developer</h2>
          <Goo className={'goo'}>
            <svg className={'gooey-svg'}>
             <g style={{animation: 'rotate_back 9s linear infinite'}}>
                <circle cx="50%" cy="50%" r="22" fill="lightseagreen" style={{animation:'blob_four 12s ease-in-out -3s infinite alternate'}}/>
                <circle cx="50%" cy="50%" r="36" fill="mediumaquamarine" style={{ animation:'blob_three 9s ease-in-out -3s infinite alternate'}}/>
                <circle cx="50%" cy="50%" r="30" fill="palegreen" style={{ animation:'blob_two 6s ease-in-out -3s infinite alternate'}}/>
                <circle cx="50%" cy="50%" r="24" fill="mediumspringgreen" style={{ animation:'blob_one 3s ease-in-out -3s infinite alternate'}}/>
              </g>
            </svg>
          </Goo>
        </div>
    </>
  )
}

export default Home
