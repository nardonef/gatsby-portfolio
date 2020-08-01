import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.css"


const Projects = ({location}) => (
  <Layout location={location}>
    <SEO title="Home" />
    <div className={'container'}>
      <h3>I specialize in full stack web development and devops.</h3>
      <h3>From front end design to back-end infrastructure architecture and everything in between.</h3>
      <h3>Having worked on consumer facing sites and complex web apps.</h3>
    </div>
  </Layout>
)

export default Projects
