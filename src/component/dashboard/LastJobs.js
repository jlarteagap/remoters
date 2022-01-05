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
      <h2 className="title is-4">Últimos trabajos publicados</h2>
      <div className="dashboard__last__jobs">
        {data.getJobs.map(job => {
          const [companies] = job.company
          return (
            <div
              className="card p-5 mb-2 is-flex is-justify-content-space-between"
              key={job.id}
            >
              <div>
                <h3 className="title is-4 m-0 is-small">{job.position}</h3>
                <p className="pt-0">
                  <strong>Empresa: </strong>
                  {companies.name}
                </p>
              </div>
              <DeleteButton jobId={job.id} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
