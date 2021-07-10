import React from "react"

import Projects from './projects'
import Home from '../components/home'
import Fun from './fun'
import Footer from '../components/footer'

const IndexPage = ({location}) => {

  return (
      <main>
        <Footer/>
        <Home/>
        <Fun/>
      </main>
  )
}

export default IndexPage
