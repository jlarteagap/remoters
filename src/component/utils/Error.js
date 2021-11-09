import React from 'react'
import PropTypes from 'prop-types'

const Error = ({ message }) => {
  return (<div className="error">{message} </div>)
}
Error.propTypes = {
  message: PropTypes.string
}

export default Error
