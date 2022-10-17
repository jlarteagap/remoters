import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaPlus, FaDoorOpen, FaSignOutAlt } from 'react-icons/fa'
import { AuthContext } from '../../context/auth'

const ButtonsHeader = () => {
  const { user, logout } = useContext(AuthContext)
  return (
    <div className="navbar-end buttons__movil">
      <Link to="/dashboard/agregar" className="button btn">
        <FaPlus className="mr-2" />
        <span className="txt">PUBLICAR</span>
      </Link>
      {user ? (
        <div className="button is-light ml-2 login" onClick={logout}>
          <FaSignOutAlt className="mr-2" />
          <span className="txt">Salir</span>
        </div>
      ) : (
        <Link className="button is-light ml-2 login" to="/login">
          <FaDoorOpen className="mr-2" />
          <span className="txt">Entrar</span>
        </Link>
      )}
    </div>
  )
}

export default ButtonsHeader
