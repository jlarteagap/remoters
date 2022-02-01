import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import JobIcon from '../jobs/JobIcon'

const CategoryMenu = ({ reset }) => {
  return (
    <div className="categories box">
      <Link
        to="/web_developers"
        className="categories-link mb-1"
        onClick={reset}
      >
        <JobIcon category="web_developers" />
        Web Development
      </Link>

      <Link
        to="/software_developer"
        className="categories-link mb-1"
        onClick={reset}
      >
        <JobIcon category="software_developer" />
        Software Developers
      </Link>
      <Link
        to="/project_managers"
        className="categories-link mb-1"
        onClick={reset}
      >
        <JobIcon category="project_managers" />
        Project Management
      </Link>
      <Link
        to="/social_media_managers"
        className="categories-link mb-1"
        onClick={reset}
      >
        <JobIcon category="social_media_managers" />
        Social Media
      </Link>
      <Link to="/comercial" className="categories-link mb-1" onClick={reset}>
        <JobIcon category="comercial" />
        Business Management &amp; Ventas
      </Link>
      <Link to="/soporte" className="categories-link mb-1" onClick={reset}>
        <JobIcon category="soporte" />
        Soporte
      </Link>
      <Link to="/designers" className="categories-link mb-1" onClick={reset}>
        <JobIcon category="designers" />
        Diseño web y gráfico
      </Link>
      <Link to="/seo" className="categories-link mb-1" onClick={reset}>
        <JobIcon category="seo" />
        SEO - Search Engine Optimization
      </Link>
      <Link to="/copywriting" className="categories-link mb-1" onClick={reset}>
        <JobIcon category="copywriting" />
        Copywriting
      </Link>
      <Link to="/seguridad" className="categories-link mb-1" onClick={reset}>
        <JobIcon category="seguridad" />
        Cyber Security
      </Link>
      <Link to="/qa" className="categories-link mb-1" onClick={reset}>
        <JobIcon category="qa" />
        Quality Assurance
      </Link>
      <Link to="/reclutadores" className="categories-link mb-1" onClick={reset}>
        <JobIcon category="reclutadores" />
        RRHH & Reclutamiento
      </Link>
    </div>
  )
}

CategoryMenu.propTypes = {
  reset: PropTypes.func
}
export default CategoryMenu
