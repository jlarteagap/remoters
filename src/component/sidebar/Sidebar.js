import React from 'react'
import { withRouter } from 'react-router-dom'
import CategoryMenu from './CategoryMenu'
import AddNewJob from './AddNewJob'

import PropTypes from 'prop-types'
import './sidebar.css'

const Sidebar = props => {
  const path = props.match.path

  const renderSidebar = () => {
    if (path === '/agregar') {
      return <AddNewJob />
    } else {
      return <CategoryMenu reset={props.reset} />
    }
  }

  return <div className="sidebar">{renderSidebar()}</div>
}

Sidebar.propTypes = {
  match: PropTypes.object,
  reset: PropTypes.func
}

export default withRouter(Sidebar)
