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

  const seen = new Set()

  const dataFiltered = data.getJobs.filter(e => {
    const duplicate = seen.has(e.category)
    seen.add(e.category)
    return !duplicate
  })

  return (
    <div className="sidebar">
      <div className="categories box">
        {dataFiltered.map(getCategory => {
          return (
            <CategoryMenu
              key={getCategory.id}
              reset={props.reset}
              data={getCategory}
            />
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
