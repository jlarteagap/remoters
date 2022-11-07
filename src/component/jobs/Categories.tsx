import React, { useContext } from 'react'
import { useQuery } from '@apollo/client'
import { GetJobsDocument } from '@service/graphql/graphql'

import PropTypes from 'prop-types'

import Job from './Job'
import Paginator from '../../utils/Paginator'
import Loading from '../../utils/Loading'
import AppContext from '../../context/AppContext'

const Categories = ({ category }): any => {
  const { nextPage, prevPage, page }: any = useContext(AppContext)
  const { loading, error, data } = useQuery(GetJobsDocument, {
    pollInterval: 5000,
    variables: {
      category,
      limit: page.limit,
      offset: page.offset,
      active: true
    }
  })
  if (loading) return <Loading />
  if (error) return `Error: ${error.message}`

  return (
    <div className="content">
      {data.getJobs.map(job => {
        return <Job key={job.id} job={job} />
      })}

      <Paginator
        actual={page.actual}
        total={data.getJobs.length.toString()}
        limit={page.limit}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </div>
  )
}

Categories.propTypes = {
  match: PropTypes.object
}
export default Categories
