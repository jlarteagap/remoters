import React from 'react'
import Link from 'next/link'
import { FaBriefcase, FaRegSun, FaHome, FaBuilding } from 'react-icons/fa'
import DashboardCSS from '@public/css/Dashboard.module.css'

export const Menu = () => {
  return (
    <aside className={`${DashboardCSS.menu__dashboard}`}>
      <div className="box">
        <Link href="/">
          <a>
            <FaHome />
            Inicio
          </a>
        </Link>
        <Link href="/panel">
          <a>
            <FaRegSun />
            Panel de administración
          </a>
        </Link>
        <Link href="/panel/nuevo/trabajo">
          <a>
            <FaBriefcase /> Agregar trabajo
          </a>
        </Link>
        <Link href="/panel/company">
          <a>
            <FaBuilding /> Agregar empresa
          </a>
        </Link>
      </div>
    </aside>
  )
}
