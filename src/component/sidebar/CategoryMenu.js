import React from 'react'
import { Link } from 'react-router-dom'
import JobIcon from '../jobs/JobIcon'
import PropTypes from 'prop-types'

const CategoryMenu = ({ reset }) => {
  return (
    <div className="categories card">
      <Link to="/SOFTWARE_DEVELOP" className="categories-link" onClick={reset}>
        <JobIcon category="SOFTWARE_DEVELOP" />
        Software Develop
      </Link>

      <Link to="/SOCIAL_MEDIA" className="categories-link" onClick={reset}>
        <JobIcon category="SOCIAL_MEDIA" />
        Social Media
      </Link>
      <Link to="/DESIGNER" className="categories-link" onClick={reset}>
        <JobIcon category="DESIGNER" />
        Designer
      </Link>
      <Link to="/SALES" className="categories-link" onClick={reset}>
        <JobIcon category="SALES" />
        Ventas
      </Link>
    </div>
  )
}

CategoryMenu.propTypes = {
  reset: PropTypes.func
}
export default CategoryMenu
