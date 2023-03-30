import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "./index.css"
import Goo from 'gooey-react'


const IndexPage = ({location}) => {

  return (
    <Layout location={location}>
      <SEO title="Home" />
      <div>
      <style>
    {`
      @keyframes left {
          0% {}
          100% { transform: rotate(-360deg) }
      }

      @keyframes right {
          0% {}    
          100% { transform: rotate(360deg) }
      }




      @keyframes blob_four {
          0% {}
          100% {
              -webkit-transform: rotate(-1turn) translate(-12.5%, -12.5%);
              transform: rotate(-1turn) translate(-12.5%, -12.5%);
          }
      }

      @-moz-keyframes blob_four {
          0% {}
          100% {
              -webkit-transform: rotate(-1turn) translate(-12.5%, -12.5%);
              transform: rotate(-1turn) translate(-12.5%, -12.5%);
          }
      }

      @-webkit-keyframes blob_four {
          0% {}
          100% {
              -webkit-transform: rotate(-1turn) translate(-12.5%, -12.5%);
              transform: rotate(-1turn) translate(-12.5%, -12.5%);
          }
      }

      @-o-keyframes blob_four {
          0% {}
          100% {
              -webkit-transform: rotate(-1turn) translate(-12.5%, -12.5%);
              transform: rotate(-1turn) translate(-12.5%, -12.5%);
          }
      }

      @-ms-keyframes blob_four {
          0% {}
          100% {
              -webkit-transform: rotate(-1turn) translate(-12.5%, -12.5%);
              transform: rotate(-1turn) translate(-12.5%, -12.5%);
          }
      }



      @keyframes blob_three {
          0% {}
          100% {
              -webkit-transform: rotate(-1turn) translate(-12.5%,12.5%);
              transform: rotate(-1turn) translate(-12.5%,12.5%);
          }
      }

      @-moz-keyframes blob_three {
          0% {}
          100% {
              -webkit-transform: rotate(-1turn) translate(-12.5%,12.5%);
              transform: rotate(-1turn) translate(-12.5%,12.5%);
          }
      }

      @-webkit-keyframes blob_three {
          0% {}
          100% {
              -webkit-transform: rotate(-1turn) translate(-12.5%,12.5%);
              transform: rotate(-1turn) translate(-12.5%,12.5%);
          }
      }

      @-o-keyframes blob_three {
          0% {}
          100% {
              -webkit-transform: rotate(-1turn) translate(-12.5%,12.5%);
              transform: rotate(-1turn) translate(-12.5%,12.5%);
          }
      }

      @-ms-keyframes blob_three {
          0% {}
          100% {
              -webkit-transform: rotate(-1turn) translate(-12.5%,12.5%);
              transform: rotate(-1turn) translate(-12.5%,12.5%);
          }
      }



      @keyframes blob_two {
          0% {}
          100% {
              -webkit-transform: rotate(-1turn) translate(12.5%,-12.5%);
              transform: rotate(-1turn) translate(12.5%,-12.5%);
          }
      }

      @-moz-keyframes blob_two {
          0% {}
          100% {
              -webkit-transform: rotate(-1turn) translate(12.5%,-12.5%);
              transform: rotate(-1turn) translate(12.5%,-12.5%);
          }
      }

      @-webkit-keyframes blob_two {
          0% {}
          100% {
              -webkit-transform: rotate(-1turn) translate(12.5%,-12.5%);
              transform: rotate(-1turn) translate(12.5%,-12.5%);
          }
      }

      @-o-keyframes blob_two {
          0% {}
          100% {
              -webkit-transform: rotate(-1turn) translate(12.5%,-12.5%);
              transform: rotate(-1turn) translate(12.5%,-12.5%);
          }
      }

      @-ms-keyframes blob_two {
          0% {}
          100% {
              -webkit-transform: rotate(-1turn) translate(12.5%,-12.5%);
              transform: rotate(-1turn) translate(12.5%,-12.5%);
          }
      }




      @keyframes blob_one {
          0% {}
          100% {
              -webkit-transform: rotate(-1turn) translate(-12.5%,-12.5%);
              transform: rotate(-1turn) translate(-12.5%,-12.5%);
          }
      }

      @-moz-keyframes blob_one {
          0% {}
          100% {
              -webkit-transform: rotate(-1turn) translate(-12.5%,-12.5%);
              transform: rotate(-1turn) translate(-12.5%,-12.5%);
          }
      }

      @-webkit-keyframes blob_one {
          0% {}
          100% {
              -webkit-transform: rotate(-1turn) translate(-12.5%,-12.5%);
              transform: rotate(-1turn) translate(-12.5%,-12.5%);
          }
      }

      @-o-keyframes blob_one {
          0% {}
          100% {
              -webkit-transform: rotate(-1turn) translate(-12.5%,-12.5%);
              transform: rotate(-1turn) translate(-12.5%,-12.5%);
          }
      }

      @-ms-keyframes blob_one {
          0% {}
          100% {
              -webkit-transform: rotate(-1turn) translate(-12.5%,-12.5%);
              transform: rotate(-1turn) translate(-12.5%,-12.5%);
          }
      }





      @keyframes rotate_back {
          0% {}
          100% {
              -webkit-transform: rotate(-1turn);
              transform: rotate(-1turn);
          }
      }

      @-moz-keyframes rotate_back {
          0% {}
          100% {
              -webkit-transform: rotate(-1turn);
              transform: rotate(-1turn);
          }
      }

      @-webkit-keyframes rotate_back {
          0% {}
          100% {
              -webkit-transform: rotate(-1turn);
              transform: rotate(-1turn);
          }
      }

      @-o-keyframes rotate_back {
          0% {}
          100% {
              -webkit-transform: rotate(-1turn);
              transform: rotate(-1turn);
          }
      }

      @-ms-keyframes rotate_back {
          0% {}
          100% {
              -webkit-transform: rotate(-1turn);
              transform: rotate(-1turn);
          }
      }
      `}
    </style>
        <main>
          <div className={'container'}>
            <h1>Frank Nardone</h1>
            <h2>Designer and Developer</h2>
            <Goo className={'goo'}>
              <svg className={'gooey-svg'}>
                {/*<circle style={{ animation: 'left 4s linear infinite' }} cx="37%" cy="37%" fill="orchid" r="32" />*/}
                {/*<circle cx="63%" cy="63%" fill="mediumorchid" r="32" />*/}
                <g style={{animation: 'rotate_back 9s linear infinite'}}>
                  <circle cx="50%" cy="50%" r="22" fill="lightseagreen" style={{animation:'blob_four 12s ease-in-out -3s infinite alternate'}}/>
                  <circle cx="50%" cy="50%" r="36" fill="mediumaquamarine" style={{ animation:'blob_three 9s ease-in-out -3s infinite alternate'}}/>
                  <circle cx="50%" cy="50%" r="30" fill="palegreen" style={{ animation:'blob_two 6s ease-in-out -3s infinite alternate'}}/>
                  <circle cx="50%" cy="50%" r="24" fill="mediumspringgreen" style={{ animation:'blob_one 3s ease-in-out -3s infinite alternate'}}/>
                </g>
                {/* <circle cx="50%" cy="50%" r="42" fill="lightseagreen" style={{animation: '12s ease-in-out -3s infinite alternate none running blob_four'}}/>*/}
                {/*<circle cx="50%" cy="50%" r="36" fill="mediumaquamarine" style={{animation: 'animation: 9s ease-in-out -3s infinite alternate none running blob_four'}}/>*/}
                {/*<circle cx="50%" cy="50%" r="30" fill="palegreen" style={{animation: 'animation: 6s ease-in-out -3s infinite alternate none running blob_two'}}/>*/}
                {/*<circle cx="50%" cy="50%" r="24" fill="mediumspringgreen" style={{animation: 'animation: 3s ease-in-out -3s infinite alternate none running blob_one'}}/> */}
              </svg>
            </Goo>
          </div>
        </main>
      </div>
    </Layout>
  )
}

export default IndexPage
