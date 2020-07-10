import React from "react"
import Img from "gatsby-image"

const Image = ({image, className}) => {
  return <Img className={className} fluid={image || null} />
}

export default Image
