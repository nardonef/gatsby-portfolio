import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState, useRef} from "react"
import "./header.css"
import Burger from '@animated-burgers/burger-squeeze'
import '@animated-burgers/burger-squeeze/dist/styles.css'


const Header = ({location}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const hasMenuBeenClicked = useRef(false);

  const onMenuClick = () => {
    setMenuOpen(!menuOpen)
    hasMenuBeenClicked.current = true;
  }

  const renderActiveLinkClass = (link) => {
    return link === location.pathname
      ? 'active-link'
      : null
  }


  const menuAnimationClass = hasMenuBeenClicked.current ? menuOpen ? 'animation' : 'closed' : '';

  return (
    <header className={'header'}>
      <div className={`menu-items ${menuAnimationClass}`}>
        <Link to={'/'}
              className={`menu-link ${renderActiveLinkClass('/')}`}>
          Home
        </Link>
        <Link
          to={'/skills'}
          className={`menu-link ${renderActiveLinkClass('/skills')}`}>
          Skills
        </Link>
        <Link
          to={'/fun'}
          className={`menu-link ${renderActiveLinkClass('/fun')}`}>
          Fun
        </Link>
      </div>
      <Burger className={'burger-menu'} onClick={onMenuClick} isOpen={menuOpen}/>
    </header>
  )
}

export default Header
