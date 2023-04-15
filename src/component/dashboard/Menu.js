import React from 'react'
import Link from 'next/link'
import { FaBriefcase, FaRegSun, FaHome, FaBuilding } from 'react-icons/fa'
import DashboardCSS from '@public/css/Dashboard.module.css'

export const Menu = () => {
  return (
    <aside className={`${DashboardCSS.menu__dashboard}`}>
      <div className="box">
        <Link href="/">
          <FaHome />
          Inicio
        </Link>
        <Link href="/panel">
          <FaRegSun />
          Panel de administración
        </Link>
        <Link href="/panel/nuevo/trabajo">
          <FaBriefcase /> Agregar trabajo
        </Link>
        <Link href="/panel/company">
          <FaBuilding /> Agregar empresa
        </Link>
      </div>
    </aside>
  )
}
