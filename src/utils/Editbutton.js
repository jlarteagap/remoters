import React from 'react'
import { FaPencilAlt } from 'react-icons/fa'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const EditButton = ({ job, companyID }) => {
  const urls = companyID ? `empresas/edit/${companyID}` : `job/edit/${job}`
  const handleButton = e => {}
  return (
    <div className="button is-warning" onClick={e => handleButton()}>
      <Link to={`/dashboard/${urls}`}>
        <FaPencilAlt />
      </Link>
    </div>
  )
}

EditButton.propTypes = {
  job: PropTypes.string,
  companyID: PropTypes.string
}

export default EditButton
