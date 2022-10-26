import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import JobIcon from '../../utils/JobIcon'

const CategoryMenu = ({ reset, data }) => {
  let companyName = data.category
  // eslint-disable-next-line no-const-assign
  switch (companyName) {
    case 'seo':
      companyName = 'SEO - Search Engine Optimization'
      break
    case 'software_developer':
      companyName = 'Software Developer'
      break
    case 'project_managers':
      companyName = 'Proyect Management'
      break
    case 'social_media':
      companyName = 'Social Media'
      break
    case 'comercial':
      companyName = 'Business Management & Ventas'
      break
    case 'designers':
      companyName = 'Diseño web y gráfico'
      break
    case 'soporte':
      companyName = 'Soporte'
      break
    case 'copywriting':
      companyName = 'Copywriting'
      break
    case 'web_develop':
      companyName = 'Web Developers'
      break
    case 'seguridad':
      companyName = 'Cyber Security'
      break
    case 'qa':
      companyName = 'Quality Assurance'
      break
    case 'reclutadores':
      companyName = 'RRHH & Reclutamiento'
      break
    case 'web_developers':
      companyName = 'Web Developers'
      break
    case 'app_developer':
      companyName = 'App Developer'
      break
    default:
      console.log('error')
  }

  return (
    <Link
      to={`/${data.category}`}
      className="categories-link mb-1"
      onClick={reset}
    >
      <JobIcon category={data.category} />
      {companyName}
    </Link>
  )
}

CategoryMenu.propTypes = {
  reset: PropTypes.func,
  data: PropTypes.object
}
export default CategoryMenu
