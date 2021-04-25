import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import "./projects.css"
import { graphql, useStaticQuery } from "gatsby"


const Projects = ({location}) => {
  const data = useStaticQuery(graphql`
      query {
          rankr: file(relativePath: { eq: "rankr.png" }) {
              ...squareImage
          }
          app: file(relativePath: { eq: "app-store-64.png" }) {
              ...squareImage
          }
      }
  `)
  return (
    <Layout location={location}>
    <SEO title="Projects" />
    <div className={'projects-container'}>
      <div className="projects-text">
        <h1 className={'project-title'}>iRanked</h1>
        <h2 className={'project-description'}>An iOS app to help keep track of favorite restaurants</h2>
        <Image image={data.app.childImageSharp.fluid} className={"app-icon"}/>
      </div>
      <div>
        <Image image={data.rankr.childImageSharp.fluid} className={"project-image"}/>
      </div>
    </div>
  </Layout>
  )
}

export default Projects
