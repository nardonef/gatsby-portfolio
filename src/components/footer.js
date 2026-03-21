import React from "react"
import Github from '../../assets/github.svg'
import Mail from '../../assets/mail.svg'
import LinkedIn from '../../assets/linkedin.svg'

import './footer.css'

const Footer = () => {
  return (
    <footer className={'footer'}>
      <a href={"https://github.com/nardonef"}
         target="_blank"
         rel="noopener noreferrer"
         aria-label="GitHub profile">
        <Github className={'icon'}/>
      </a>
      <a href={"mailto:franknardone95@gmail.com"}
         aria-label="Send email">
        <Mail className={'icon'}/>
      </a>
      <a href={"https://www.linkedin.com/in/nardonefrank/"}
         target="_blank"
         rel="noopener noreferrer"
         aria-label="LinkedIn profile">
        <LinkedIn className={'icon'}/>
      </a>
    </footer>
  )
}

export default Footer
