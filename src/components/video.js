import React, { useState } from "react"

import Image from "../components/image"
import PB from "../../assets/play-button.svg"
import "./video.css"

const Video = ({ image, text, videoUrl }) => {
  const [hover, setHover] = useState(false)

  const renderHoverStates = () => {
    return !hover
      ? <PB className={"play-button"}/>
      : <p className={"video-text"}>{text}</p>
  }


  return (
    <div onMouseEnter={() => setHover(true)}
         onMouseLeave={() => setHover(false)}
         href={videoUrl}
         className={"video-container"}
         target="_blank"
         rel="noopener noreferrer">
      <Image image={image} className={"video-image"}/>
      <div className={"video-text-container"}>
        {renderHoverStates()}
      </div>
      <p className={"video-text-mobile"}>{text}</p>
    </div>
  )
}

export default Video
