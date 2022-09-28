import React, { useContext } from 'react'
import Link from 'next/link'
import { AuthContext } from '../../context/auth'
import BurgerMenu from './BurgerMenu'

// eslint-disable-next-line react/prop-types
const MenuHeader = ({ onClick, isActive }) => {
  const { user } = useContext(AuthContext)
  return (
    <div className={`navbar-menu ${isActive ? 'is-active navbar--menu' : ''}`}>
      <BurgerMenu isActive={isActive} onClick={onClick} />
      <div className="navbar-start">
        <Link to="/" className="navbar-item effect__hover menu__it">
          Inicio
        </Link>
        {user ? (
          <Link to="/dashboard" className="navbar-item effect__hover menu__it">
            Panel
          </Link>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default MenuHeader
