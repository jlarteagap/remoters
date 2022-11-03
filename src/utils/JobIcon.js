import React from 'react'
import icons from '../assets/img/icons.png'
import PropTypes from 'prop-types'
import jobCSS from '@public/css/Job.module.css'
const JobIcon = ({ category }) => {
  return (
    <div className={`${jobCSS.job__icons}`}>
      <span
        className={`${jobCSS.job__icon} ${category}`}
        style={{ backgroundImage: `url(${icons.src})` }}
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
