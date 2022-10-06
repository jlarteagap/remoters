import React from 'react'
import icons from '../../assets/img/icons.png'
import PropTypes from 'prop-types'
// import { GET_CATEGORY } from '../../Graphql/Query'
// import { useQuery } from '@apollo/client'

const JobIcon = ({ category }) => {
  // const { data } = useQuery(GET_CATEGORY, {
  //   variables: {
  //     slug: category
  //   }
  // })

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
