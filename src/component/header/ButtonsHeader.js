import React, { useContext } from 'react'
import Link from 'next/link'
import { FaPlus, FaDoorOpen, FaSignOutAlt } from 'react-icons/fa'
import { AuthContext } from '../../context/auth'
import headerCSS from '../../../public/css/Header.module.css'

const ButtonsHeader = () => {
  const { user, logout } = useContext(AuthContext)

  return (
    <div className={`navbar-end ${headerCSS.buttons__movil}`}>
      <Link href="/panel/nuevo/trabajo">
        <a className={`button btn`}>
          <FaPlus className="mr-2" />
          <span className={`${headerCSS.txt}`}>PUBLICAR</span>
        </a>
      </Link>
      {user.email === '' ? (
        <Link href="/login">
          <a className={`button is-light ml-2`}>
            <span className={`${headerCSS.txt}`}>Entrar</span>
            <FaDoorOpen className="mr-2" />
          </a>
        </Link>
      ) : (
        <a className={`button is-light ml-2`} onClick={logout}>
          <FaSignOutAlt className="mr-2" />
          <span className={`${headerCSS.txt}`}>Salir</span>
        </a>
      )}
    </div>
  )
}

export default ButtonsHeader
