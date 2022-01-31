import React from 'react'
import { Link } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa'
import PropTypes from 'prop-types'

const CategoryMenu = ({ reset }) => {
  return (
    <div className="categories box">
      <Link
        to="/web_developers"
        className="categories-link mb-1"
        onClick={reset}
      >
        <FaAngleRight />
        Web Development
      </Link>

      <Link
        to="/software_developer"
        className="categories-link mb-1"
        onClick={reset}
      >
        <FaAngleRight />
        Software Developers
      </Link>
      <Link
        to="/project_managers"
        className="categories-link mb-1"
        onClick={reset}
      >
        <FaAngleRight />
        Project Management
      </Link>
      <Link
        to="/social_media_managers"
        className="categories-link mb-1"
        onClick={reset}
      >
        <FaAngleRight />
        Social Media
      </Link>
      <Link to="/comercial" className="categories-link mb-1" onClick={reset}>
        <FaAngleRight />
        Business Management &amp; Ventas
      </Link>
      <Link to="/soporte" className="categories-link mb-1" onClick={reset}>
        <FaAngleRight />
        Soporte
      </Link>
      <Link to="/designers" className="categories-link mb-1" onClick={reset}>
        <FaAngleRight />
        Diseño web y gráfico
      </Link>
      <Link to="/seo" className="categories-link mb-1" onClick={reset}>
        <FaAngleRight />
        SEO - Search Engine Optimization
      </Link>
      <Link to="/copywriting" className="categories-link mb-1" onClick={reset}>
        <FaAngleRight />
        Copywriting
      </Link>
      <Link to="/seguridad" className="categories-link mb-1" onClick={reset}>
        <FaAngleRight />
        Cyber Security
      </Link>
      <Link to="/qa" className="categories-link mb-1" onClick={reset}>
        <FaAngleRight />
        Quality Assurance
      </Link>
      <Link to="/reclutadores" className="categories-link mb-1" onClick={reset}>
        <FaAngleRight />
        RRHH & Reclutamiento
      </Link>
    </div>
  )
}

CategoryMenu.propTypes = {
  reset: PropTypes.func
}
export default CategoryMenu
