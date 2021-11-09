import React from 'react'
import { Link } from 'react-router-dom'
import { FaBriefcase, FaBuilding } from 'react-icons/fa'

export const Menu = () => {
  return (
        <div className="menu__dashboard">
            <Link
                to="/dashboard/agregar"
                className=""
                ><FaBriefcase /> Agregar trabajo</Link>
            <Link
                to="/dashboard/empresas"
                className=""
                ><FaBuilding /> Agregar empresa</Link>
        </div>
  )
}
