import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import YouTube from 'react-youtube';
import Image from "../components/image"
import Video from "../components/video"
import SEO from "../components/seo"
import "./fun.css"

const Fun = ({location}) => {
 const data = useStaticQuery(graphql`
    query {
      thailand: file(relativePath: { eq: "fun/thailand.jpg" }) {
        ...squareImage
      }
      europe1: file(relativePath: { eq: "fun/europe1.jpg" }) {
        ...squareImage
      }
      europe2: file(relativePath: { eq: "fun/europe2.jpg" }) {
        ...squareImage
      }
      niagaraFalls: file(relativePath: { eq: "fun/niagaraFalls.jpg" }) {
        ...squareImage
      }
    }
  `)

  return (
    <Layout location={location}>
      {/*<div className={'fun-container'}>*/}
      {/*  <YouTube*/}
      {/*    videoId={'ZfgG8UChcoo'}*/}
      {/*    className={'fun-container-1'}*/}
      {/*  />*/}
      {/*  <YouTube*/}
      {/*    videoId={'uqy2hzCefrc'}*/}
      {/*    className={'fun-container-1'}*/}
      {/*  />*/}
      {/*  <YouTube*/}
      {/*    videoId={'d8OxRHMdSv8'}*/}
      {/*    className={'fun-container-1'}*/}
      {/*  />*/}
      {/*  <YouTube*/}
      {/*    videoId={'8qrvH6euVhI'}*/}
      {/*    className={'fun-container-1'}*/}
      {/*  />*/}
      {/*</div>*/}
      <div className={'fun-container'}>
        <Video text={'Thailand'}
               image={data.thailand.childImageSharp.fluid}
               videoUrl={'https://www.youtube.com/watch?v=d8OxRHMdSv8'}/>
        <Video text={'Europe 1'}
               image={data.europe1.childImageSharp.fluid}
               videoUrl={'https://www.youtube.com/watch?v=ZfgG8UChcoo'}/>
        <Video text={'Europe 2'}
               image={data.europe2.childImageSharp.fluid}
               videoUrl={'https://www.youtube.com/watch?v=uqy2hzCefrc'}/>
        <Video text={'Niagara Falls'}
               image={data.niagaraFalls.childImageSharp.fluid}
               videoUrl={'https://www.youtube.com/watch?v=8qrvH6euVhI'}/>
      </div>
    </Layout>
  )
}

export const squareImage = graphql`
    fragment squareImage on File {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
`

export default Fun
