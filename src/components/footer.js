import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Github from '../../assets/github.svg'
import Mail from '../../assets/mail.svg'
import LinkedIn from '../../assets/linkedin.svg'

import './footer.css'

const Header = () => {

  // todo use gatsby image
  return (
    <footer className={'footer'}>
      <Github className={'icon'}/>
      <Mail className={'icon'}/>
      <LinkedIn className={'icon'}/>
    </footer>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
