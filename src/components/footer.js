import React from "react"
import Github from '../../assets/github.svg'
import Mail from '../../assets/mail.svg'
import LinkedIn from '../../assets/linkedin.svg'

import './footer.css'

const Footer = () => {

  // todo use gatsby image
  return (
    <>
      <footer className={'footer'}>
        <Github className={'icon'}/>
        <Mail className={'icon'}/>
        <LinkedIn className={'icon'}/>
      </footer>
      <div className='footer-spacer'/>
    </>
  )
}

export default Footer
