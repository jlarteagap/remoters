import React from 'react'
import icons from '../../assets/img/icons.png'
import PropTypes from 'prop-types'

const JobIcon = ({ category }) => {
  return (
    <div className="job__icons">
      <span
        className={'job__icon ' + category}
        style={{ backgroundImage: `url(${icons})` }}
      >
        <i></i>
      </span>

    </div>
  )
}

JobIcon.propTypes = {
  category: PropTypes.string
}
export default JobIcon
