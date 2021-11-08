import React, { Fragment, useContext } from 'react'
import './Jobs.css'
import Job from './Job'
import { useQuery } from '@apollo/client'
import { GET_JOBS } from '../../Graphql/Query'

import Paginator from '../utils/Paginator'
import Loading from '../utils/Loading'

import AppContext from '../../context/AppContext'

const JobsList = () => {
  const { nextPage, prevPage, page } = useContext(AppContext)
  const { loading, error, data } = useQuery(GET_JOBS, {
    pollInterval: 3000,
    variables: {
      limit: page.limit,
      offset: page.offset
    }
  })

  if (loading) return <Loading />
  if (error) return `Error: ${error.message}`
  return (
        <Fragment>
            <div className="content">
                {data.getJobs.map(job => {
                  return (
                            <Job
                                key={job.id}
                                job={job}
                            />
                  )
                })}

                <Paginator
                    actual = {page.actual}
                    total = {data.totalJobs}
                    limit = {page.limit}
                    prevPage = {prevPage}
                    nextPage = {nextPage}
                />
            </div>

        </Fragment>
  )
}

export default JobsList
