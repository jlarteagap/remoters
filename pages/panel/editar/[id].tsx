import React from 'react'
import { useRouter } from 'next/router'
import { Menu } from '@components/dashboard/Menu'
import EditJobs from '@components/add/EditJobs'
import Loading from '@utils/Loading'

import { useQuery } from '@apollo/client'
import { GetJobDocument } from '@service/graphql/graphql'
import withAuth from '@hoc/withAuth'

import Seo from '@components/seo/seo'
const EditJob = () => {
  const router = useRouter()
  const id: any = router.query.id
  const { loading, error, data, refetch } = useQuery(GetJobDocument, {
    variables: {
      id
    }
  })
  if (loading) return <Loading />
  if (error) return `Error: ${error.message}`
  return (
    <>
      <Seo title={`Editar ${data.getJob.content.title}`} />
      <div className="home">
        <Menu />
        <div className="home__jobs">
          <EditJobs data={data.getJob} refetch={refetch} />
        </div>
      </div>
    </>
  )
}

export default withAuth(EditJob)
