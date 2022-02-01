import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/auth'
import './header.css'
// eslint-disable-next-line react/prop-types
const MenuHeader = ({ isActive }) => {
  const { user } = useContext(AuthContext)
  return (
    <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
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
