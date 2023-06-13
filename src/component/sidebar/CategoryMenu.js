import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import sidebarCSS from '@public/css/Sidebar.module.css'
import { CategoryIconMap } from '@utils/CategoryIconMap'

const CategoryMenu = ({ reset, data }) => {
  const categoryName = CategoryIconMap[data.category] || 'error'
  return (
    <Link
      href={`/categoria/${data.category}`}
      onClick={reset}
      className={`${sidebarCSS.categories_link} mb-1`}
    >
      {categoryName}
    </Link>
  )
}

CategoryMenu.propTypes = {
  reset: PropTypes.func,
  data: PropTypes.object
}
export default CategoryMenu
