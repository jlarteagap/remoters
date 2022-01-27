import React from 'react'
import { FaPencilAlt } from 'react-icons/fa'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const EditButton = ({ job }) => {
  const handleButton = e => {}
  return (
    <div className="button is-warning" onClick={e => handleButton()}>
      <Link to={`/dashboard/job/edit/${job}`}>
        <FaPencilAlt />
      </Link>
    </div>
  )
}

EditButton.propTypes = {
  job: PropTypes.string
}

export default EditButton
