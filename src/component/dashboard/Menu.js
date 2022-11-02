import React from 'react'
import Link from 'next/link'
import { FaBriefcase, FaRegSun, FaHome } from 'react-icons/fa'
import DashboardCSS from '@public/css/Dashboard.module.css'

export const Menu = () => {
  return (
    <aside className={DashboardCSS.menu__dashboard}>
      <Link href="/">
        <a>
          <FaHome />
          Inicio
        </a>
      </Link>
      <Link href="/panel">
        <a>
          <FaRegSun />
          Panel de control
        </a>
      </Link>
      <Link href="/panel/agregar">
        <a>
          <FaBriefcase /> Agregar trabajo
        </a>
      </Link>
    </aside>
  )
}
