import React, { useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.css"
import Goo from 'gooey-react'

const IndexPage = ({location}) => {

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <Layout location={location}>
      <SEO title="Home" />
      <div className="home-wrapper">
        <main className="home-main">
          <div className={'container'}>
            <Goo className={'goo'}>
              <svg className={'gooey-svg'}>
                <g style={{animation: 'rotate_back 9s linear infinite'}}>
                  <circle cx="50%" cy="50%" r="50" fill="mediumaquamarine" style={{animation:'blob_three 9s ease-in-out -3s infinite alternate'}}/>
                  <circle cx="50%" cy="50%" r="42" fill="palegreen" style={{animation:'blob_two 6s ease-in-out -3s infinite alternate'}}/>
                  <circle cx="50%" cy="50%" r="36" fill="mediumspringgreen" style={{animation:'blob_one 3s ease-in-out -3s infinite alternate'}}/>
                  <circle cx="50%" cy="50%" r="30" fill="lightseagreen" style={{animation:'blob_four 12s ease-in-out -3s infinite alternate'}}/>
                </g>
                <g style={{animation: 'rotate_back 14s linear infinite reverse'}}>
                  <circle cx="50%" cy="50%" r="28" fill="mediumspringgreen" style={{animation:'blob_five 10s ease-in-out -5s infinite alternate'}}/>
                  <circle cx="50%" cy="50%" r="22" fill="palegreen" style={{animation:'blob_six 7s ease-in-out -2s infinite alternate'}}/>
                  <circle cx="50%" cy="50%" r="18" fill="lightseagreen" style={{animation:'blob_seven 8s ease-in-out -4s infinite alternate'}}/>
                </g>
              </svg>
            </Goo>
            <h1>Frank Nardone</h1>
            <h2>Designer & Developer</h2>
            <p className={'intro-text'}>iOS, web, full-stack, and AI-enabled applications</p>
          </div>
        </main>
      </div>
    </Layout>
  )
}

export default IndexPage
