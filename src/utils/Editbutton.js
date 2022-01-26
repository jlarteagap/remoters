import React from 'react'
import { FaPencilAlt } from 'react-icons/fa'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const EditButton = ({ jobID }) => {
  const handleButton = e => {}
  return (
    <div className="button is-warning" onClick={e => handleButton()}>
      <Link to={`/dashboard/job/edit/${jobID}`}>
        <FaPencilAlt />
      </Link>
    </div>
  )
}

EditButton.propTypes = {
  jobID: PropTypes.string
}

export default EditButton
