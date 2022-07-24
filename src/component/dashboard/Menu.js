import React from 'react'
import { Link } from 'react-router-dom'
import { FaBriefcase, FaRegSun, FaHome } from 'react-icons/fa'

export const Menu = () => {
  return (
    <div className="menu__dashboard">
      <div className="box">
        <Link to="/">
          <FaHome />
          Inicio
        </Link>
        <Link to="/dashboard">
          <FaRegSun />
          Panel de control
        </Link>
        <Link to="/dashboard/agregar" className="">
          <FaBriefcase /> Agregar trabajo
        </Link>
      </div>
    </div>
  )
}
