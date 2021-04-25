import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({location}) => (
  <Layout location={location}>
    <SEO title="404: Not found" />
    <h1 style={{margin: 'auto'}}>SNEAKY SNEAKY...</h1>
  </Layout>
)

export default NotFoundPage
