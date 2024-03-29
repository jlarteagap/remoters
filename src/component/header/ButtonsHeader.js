import React, { useContext } from 'react'
import Link from 'next/link'
import { FaPlus, FaDoorOpen, FaSignOutAlt } from 'react-icons/fa'
import { AuthContext } from '../../context/auth'
import headerCSS from '../../../public/css/Header.module.css'
import { useRouter } from 'next/router'

const ButtonsHeader = () => {
  const { user, logout } = useContext(AuthContext)
  const router = useRouter()

  const logoutActions = () => {
    logout()
    router.push('/')
  }
  return (
    <div className={`navbar-end ${headerCSS.buttons__movil}`}>
      <Link href="/panel/nuevo/trabajo" className={`button btn`}>
        <FaPlus className="mr-2" />
        <span className={`${headerCSS.txt}`}>PUBLICAR</span>
      </Link>
      {user.email === '' ? (
        <Link href="/login" className={`button is-light ml-2`}>
          <span className={`${headerCSS.txt}`}>Entrar</span>
          <FaDoorOpen className="mr-2" />
        </Link>
      ) : (
        <div className={`button is-light ml-2`} onClick={logoutActions}>
          <FaSignOutAlt className="mr-2" />
          <span className={`${headerCSS.txt}`}>Salir</span>
        </div>
      )}
    </div>
  )
}

export default ButtonsHeader
