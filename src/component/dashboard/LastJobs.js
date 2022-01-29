import React, { useContext } from 'react'
import { useQuery } from '@apollo/client'
import { GET_JOBS } from '../../Graphql/Query'
import Loading from '../utils/Loading'
import DeleteButton from '../../utils/DeleteButton'
import EditButton from '../../utils/Editbutton'
import { AuthContext } from '../../context/auth'

export const LastJobs = () => {
  const { user } = useContext(AuthContext)
  const { loading, error, data } = useQuery(GET_JOBS, {
    pollInterval: 1100,
    variables: {
      username: user.email
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
              <div className="is-flex">
                <div className="mr-3">
                  <EditButton job={job.id} />
                </div>
                <DeleteButton jobID={job.id} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
