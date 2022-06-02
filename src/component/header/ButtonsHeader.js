import React from 'react'
import { Link } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa'

const ButtonsHeader = () => {
  return (
    <div className="navbar-end buttons__movil">
      <Link to="/agregar" className="button btn">
        <FaPlus className="mr-2" />
        <span className="txt">PUBLICAR</span>
      </Link>
    </div>
  )
}

export default ButtonsHeader
