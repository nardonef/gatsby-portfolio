import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Page not found" />
    <div style={{margin: 'auto', textAlign: 'center', paddingTop: '20vh'}}>
      <h1>Page not found</h1>
      <p>This page doesn't exist. <a href="/" style={{color: 'mediumspringgreen'}}>Back to home</a></p>
    </div>
  </Layout>
)

export default NotFoundPage
