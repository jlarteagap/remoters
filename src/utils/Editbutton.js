import React from 'react'
import { FaPencilAlt } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Link from 'next/link'

const EditButton = ({ job, companyID }) => {
  const urls = companyID ? `company/editar/${companyID}` : `editar/${job}`
  const handleButton = e => {}
  return (
    <div className="button is-warning" onClick={e => handleButton()}>
      <Link href={`/panel/${urls}`}>
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
