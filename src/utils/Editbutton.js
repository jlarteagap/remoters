import React from 'react'
import { FaPencilAlt } from 'react-icons/fa'
import PropTypes from 'prop-types'

const EditButton = ({ companyId }) => {
  const handleButton = e => {}
  return (
    <div className="button is-warning" onClick={e => handleButton()}>
      <FaPencilAlt />
    </div>
  )
}

EditButton.propTypes = {
  companyId: PropTypes.string.isRequired
}

export default EditButton
