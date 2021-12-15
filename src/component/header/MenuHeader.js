import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/auth'

// eslint-disable-next-line react/prop-types
const MenuHeader = ({ isActive }) => {
  const { user } = useContext(AuthContext)
  return (
    <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
      {user ? (
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link to="/dashboard" className="navbar-item">
            Panel
          </Link>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default MenuHeader
