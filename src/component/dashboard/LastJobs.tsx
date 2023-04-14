import React, { useContext } from 'react'
import { useQuery } from '@apollo/client'
import { GetJobsDocument } from '@service/graphql/graphql'
import Loading from '@utils/Loading'
import DeleteButton from '@utils/DeleteButton'
import EditButton from '@utils/Editbutton'
import { AuthContext } from '@context/auth'
import Dashboard from '@public/css/Dashboard.module.css'
import ShowDateInJobs from '@utils/ShowDate'
import { useRouter } from 'next/router'
const LastJobs = (): any => {
  const { user } = useContext(AuthContext)
  const router = useRouter()
  const path = router.asPath
  const { loading, error, data } = useQuery(GetJobsDocument, {
    variables: {
      username: user.email
    }
  })

  if (loading) return <Loading />
  if (error) return `Error: ${error.message}`

  return (
    <div className={Dashboard.dashboard__jobs}>
      <h2 className="title is-4">Últimos trabajos publicados</h2>
      <div className="dashboard__last__jobs">
        {data.getJobs
          .map(job => {
            const createdPost: any = job.createdAt
            const updatedPost: any = job.updatedAt
            const transformCreateAtDate = new Date(createdPost * 1)
            const transformUpdateAtDate = new Date(updatedPost * 1)

            return (
              <div
                className="card p-5 mb-2 is-flex is-justify-content-space-between"
                key={job.id}
              >
                <div>
                  {job.active
                    ? (
                    <div className="help is-primary is-light has-text-weight-bold">
                      Activo
                    </div>
                      )
                    : (
                    <div className="help is-primary is-danger">Inactivo</div>
                      )}
                  <h3 className="title is-4 m-0 is-small">
                    {job.content.title}
                  </h3>
                  <p className="pt-0">
                    <strong>Empresa: </strong>
                    {job.company.name}
                  </p>
                  <p className="pt-0 help">
                    <strong>Publicado: </strong>
                    <ShowDateInJobs date={transformCreateAtDate} />
                  </p>
                  <p className="pt-0 help">
                    <strong>Actualizado: </strong>
                    <ShowDateInJobs date={transformUpdateAtDate} />
                  </p>
                </div>
                <div className="is-flex">
                  <div className="mr-3">
                    <EditButton job={job.id} />
                  </div>
                  <DeleteButton jobId={job.id} path={path}/>
                </div>
              </div>
            )
          })
          .reverse()}
      </div>
    </div>
  )
}

export default LastJobs
