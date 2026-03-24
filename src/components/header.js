import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"


const Header = ({location}) => {
  const renderActiveLinkClass = (link) => {
    return link === location.pathname
      ? 'active-link'
      : null
  }

  return (
    <header className={'header'}>
      <nav className={'menu-items'} aria-label="Main navigation">
        <Link to={'/'}
              className={`menu-link ${renderActiveLinkClass('/')}`}>
          Home
        </Link>
        <Link
          to={'/projects'}
          className={`menu-link ${renderActiveLinkClass('/projects')}`}>
          Projects
        </Link>
        <Link
          to={'/services'}
          className={`menu-link ${renderActiveLinkClass('/services')}`}>
          Services
        </Link>
        <Link
          to={'/fun'}
          className={`menu-link ${renderActiveLinkClass('/fun')}`}>
          Travel
        </Link>
      </nav>
    </header>
  )
}

export default Header
