/* eslint-disable react/prop-types */
import { useQuery } from '@apollo/client'
import React from 'react'
import { withRouter } from 'react-router-dom/'
import EditJob from '../component/Add/EditJobs'
import { Menu } from '../component/dashboard/Menu'
import Loading from '../component/utils/Loading'

import { GET_JOB } from '../Graphql/Query'

const EditJobsContainer = props => {
  const { id } = props.match.params
  const { loading, error, data, refetch } = useQuery(GET_JOB, {
    variables: {
      id
    }
  })
  if (loading) return <Loading />
  if (error) return `Error: ${error.message}`

  return (
    <div className="home">
      <Menu />
      <div className="home__jobs">
        <EditJob data={data.getJob} refetch={refetch} />
      </div>
    </div>
  )
}

export default withRouter(EditJobsContainer)
