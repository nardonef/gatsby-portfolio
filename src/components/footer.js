import React from "react"
import Github from '../../assets/github.svg'
import Mail from '../../assets/mail.svg'
import LinkedIn from '../../assets/linkedin.svg'

import './footer.css'

const Footer = () => {

  // todo use gatsby image
  return (
    <div className={'footer-container'}>
      <footer className={'footer'}>
        <a href={"https://github.com/nardonef"}
           target="_blank"
           rel="noopener noreferrer">
          <Github className={'icon'}/>
        </a>
        <a href={"mailto: franknardone95@gmail.com"}
           target="_blank"
           rel="noopener noreferrer">
        <Mail className={'icon'}/>
        </a>
        <a href={"https://www.linkedin.com/in/nardonefrank/"}
           target="_blank"
           rel="noopener noreferrer">
        <LinkedIn className={'icon'}/>
        </a>
      </footer>
      {/*<div className='footer-spacer'/>*/}
    </div>
  )
}

export default Footer
