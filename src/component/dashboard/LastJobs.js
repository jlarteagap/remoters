import React, { useContext } from 'react'
import { useQuery } from '@apollo/client'
import { GET_JOBS } from '../../Graphql/Query'
import Loading from '../../utils/Loading'
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
          console.log(job)
          return (
            <div
              className="card p-5 mb-2 is-flex is-justify-content-space-between"
              key={job.id}
            >
              <div>
                {job.active ? (
                  <div className="help is-primary is-light has-text-weight-bold">
                    Activo
                  </div>
                ) : (
                  <div className="help is-primary is-danger">Inactivo</div>
                )}
                <h3 className="title is-4 m-0 is-small">
                  {job.position || job.content.title}
                </h3>
                <p className="pt-0">
                  <strong>Empresa: </strong>
                  {job.company.name || job.companySimple}
                </p>
              </div>
              <div className="is-flex">
                <div className="mr-3">
                  <EditButton job={job.id} />
                </div>
                <DeleteButton jobId={job.id} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
