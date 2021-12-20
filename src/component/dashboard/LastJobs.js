import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_JOBS } from '../../Graphql/Query'
import Loading from '../utils/Loading'
import DeleteButton from '../../utils/DeleteButton'

export const LastJobs = () => {
  const { loading, error, data } = useQuery(GET_JOBS, {
    pollInterval: 1100,
    variables: {
      limit: 5
    }
  })

  if (loading) return <Loading />
  if (error) return `Error: ${error.message}`

  return (
    <div className="dashboard__jobs">
      <h2 className="title is-4">Ultimos trabajos publicados</h2>
      <div className="dashboard__last__jobs">
        {data.getJobs.map(job => {
          const [companies] = job.company
          return (
            <div className="card p-5 mb-2" key={job.id}>
              <h3 className="dashboard__last__jobs--title">{job.position}</h3>
              <p className="dashboard__last__jobs--companies">
                <strong>Empresa: </strong>
                {companies.name}
              </p>
              <DeleteButton jobId={job.id} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
