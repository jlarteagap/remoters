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
      className={`navbar container is-align-items-center is-flex is-justify-content-space-between`}
    >
      <div className="navbar-brand">
        <BurgerMenu
          isActive={isActive}
          onClick={() => {
            setisActive(!isActive)
          }}
        />
        <Link className="navbar-item" href="/" onClick={resetState}>
          <div className="is-align-items-center is-flex is-justify-content-space-between">
            <h1 className={`${headerCSS.header__title} title`}>{title}</h1>
          </div>
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
