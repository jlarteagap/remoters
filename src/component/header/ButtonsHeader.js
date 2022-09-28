import React, { useContext } from 'react'
import Link from 'next/link'
import { FaPlus, FaDoorOpen, FaSignOutAlt } from 'react-icons/fa'
import { AuthContext } from '../../context/auth'
import headerCSS from '../../../public/css/Header.module.css'
const ButtonsHeader = () => {
  const { user, logout } = useContext(AuthContext)
  return (
    <div className={`navbar-end ${headerCSS.buttons__movil}`}>
      <Link href="/dashboard/agregar">
        <a className={`button btn`}>
          <FaPlus className="mr-2" />
          <span className={`${headerCSS.txt}`}>PUBLICAR</span>
        </a>
      </Link>
      {user ? (
        <div onClick={logout} as={Link}>
          <a className={`button is-light ml-2`}>
            <FaSignOutAlt className="mr-2" />
            <span className={`${headerCSS.txt}`}>Salir</span>
          </a>
        </div>
      ) : (
        <Link href="/login">
          <a className={`button is-light ml-2`}>
            <FaDoorOpen className="mr-2" />
            <span className={`${headerCSS.txt}`}>Entrar</span>
          </a>
        </Link>
      )}
    </div>
  )
}

export default ButtonsHeader
