import React from 'react'
import CategoryMenu from './CategoryMenu'

import PropTypes from 'prop-types'
import './sidebar.css'

const Sidebar = props => {
  return (
    <div className="sidebar">
      <CategoryMenu reset={props.reset} />
    </div>
  )
}

Sidebar.propTypes = {
  match: PropTypes.object,
  reset: PropTypes.func
}

export default Sidebar
