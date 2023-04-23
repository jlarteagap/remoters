import React, { useContext } from 'react'
import Link from 'next/link'
import { AuthContext } from '../../context/auth'
import BurgerMenu from './BurgerMenu'
import headerCSS from '../../../public/css/Header.module.css'
import { Panel } from './Panel'
// eslint-disable-next-line react/prop-types
const MenuHeader = ({ onClick, isActive }) => {
  const { user } = useContext(AuthContext)
  return (
    <div className={`navbar-menu ${isActive ? 'is-active navbar--menu' : ''}`}>
      <BurgerMenu isActive={isActive} onClick={onClick} />
      <div className="navbar-start">
        <Link
          href="/"
          className={`navbar-item ${headerCSS.menu__it} effect__hover`}
        >
          Inicio
        </Link>
        {user.email !== '' && <Panel />}
      </div>
    </div>
  )
}

export default MenuHeader
