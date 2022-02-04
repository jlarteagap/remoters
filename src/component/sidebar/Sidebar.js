import React from 'react'
import CategoryMenu from './CategoryMenu'
import { GET_JOBS } from '../../Graphql/Query'
import PropTypes from 'prop-types'
import './sidebar.css'
import { useQuery } from '@apollo/client'
import Loading from '../utils/Loading'
const Sidebar = props => {
  const { loading, error, data } = useQuery(GET_JOBS)

  if (loading) return <Loading />
  if (error) return `Error: ${error.message}`

  return (
    <div className="sidebar">
      <div className="categories box">
        {data.getJobs.map(company => {
          return (
            <CategoryMenu key={company.id} reset={props.reset} data={company} />
          )
        })}
      </div>
    </div>
  )
}

Sidebar.propTypes = {
  match: PropTypes.object,
  reset: PropTypes.func
}

export default Sidebar
