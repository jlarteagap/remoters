import React from 'react'
import CategoryMenu from './CategoryMenu'
import { GetJobsDocument } from '@service/graphql/graphql'
import { useQuery } from '@apollo/client'
import PropTypes from 'prop-types'
import sidebarCSS from '@public/css/Sidebar.module.css'
import Loading from '@utils/Loading'

const Sidebar = (props): any => {
  const { loading, error, data } = useQuery(GetJobsDocument, {
    variables: {
      active: true
    }
  })

  if (loading) return <Loading />
  if (error) return `Error: ${error.message}`

  const seen = new Set()

  const dataFiltered = data.getJobs.filter(e => {
    const duplicate = seen.has(e.category)
    seen.add(e.category)
    return !duplicate
  })

  return (
    <React.Fragment>
      <div className={`sidebar`}>
        <div className={`${sidebarCSS.categories} box`}>
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
    </React.Fragment>
  )
}

Sidebar.propTypes = {
  match: PropTypes.object,
  reset: PropTypes.func
}

export default Sidebar
