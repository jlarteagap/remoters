import React, { useContext, useState } from 'react'
import AppContext from '../../context/AppContext'
import Link from 'next/link'
import PropTypes from 'prop-types'

// import CSS
import headerCSS from '../../../public/css/Header.module.css'
import ButtonsHeader from './ButtonsHeader'
import MenuHeader from './MenuHeader'
import BurgerMenu from './BurgerMenu'

const Header = ({ title }) => {
  const [isActive, setisActive] = useState(false)
  const { resetState } = useContext(AppContext)

  return (
    <nav
      className={`${headerCSS.nabvar__menu} navbar container is-align-items-center is-flex is-justify-content-space-between`}
    >
      <div className="navbar-brand">
        <BurgerMenu
          isActive={isActive}
          onClick={() => {
            setisActive(!isActive)
          }}
        />
        <Link className="navbar-item" to="/" onClick={resetState}>
          <h1 className="title header__title">{title}</h1>
        </Link>
      </div>
      <MenuHeader
        isActive={isActive}
        onClick={() => {
          setisActive(!isActive)
        }}
      />
      <ButtonsHeader />
    </nav>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}
export default Header
