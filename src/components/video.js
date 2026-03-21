import React from "react"

import Image from "../components/image"
import PB from "../../assets/play-button.svg"
import "./video.css"

const Video = ({ image, text, videoUrl }) => {
  return (
    <a href={videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={"video-container-link"}
      aria-label={`Watch ${text} video on YouTube`}>
      <div className={"video-container"}>
        <Image image={image} className={"video-image"}/>
        <div className={"video-overlay"}>
          <PB className={"play-button"} aria-hidden="true"/>
          <p className={"video-label"}>{text}</p>
        </div>
        <p className={"video-text-mobile"}>{text}</p>
      </div>
    </a>
  )
}

export default Video
