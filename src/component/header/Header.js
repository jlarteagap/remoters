import React, { useContext, useState } from 'react'
import AppContext from '../../context/AppContext'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

// import CSS
import ButtonsHeader from './ButtonsHeader'
import MenuHeader from './MenuHeader'

const Header = ({ title }) => {
  const [isActive, setisActive] = useState(false)
  const { resetState } = useContext(AppContext)
  return (
    <nav className="navbar container is-align-items-center">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/" onClick={resetState}>
          <h1 className="title">{title}</h1>
        </Link>
        <a
          onClick={() => {
            setisActive(!isActive)
          }}
          role="button"
          className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <MenuHeader isActive={isActive} />
      <ButtonsHeader />
    </nav>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}
export default Header
