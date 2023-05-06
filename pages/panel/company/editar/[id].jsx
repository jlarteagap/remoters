import React from 'react'

import EditCompany from '@components/company/EditCompany'
import { Menu } from '@components/dashboard/Menu'
import DashboardCSS from '@public/css/Dashboard.module.css'
import withAuth from '@hoc/withAuth'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import Loading from '@utils/Loading'
import { GetCompanyDocument } from '@service/graphql/graphql'

const EditCompanyPage = () => {
  const router = useRouter()
  const id = router.query.id
  const { data, error, loading, refetch } = useQuery(GetCompanyDocument, {
    variables: {
      id
    }
  })

  if (loading) return <Loading />
  if (error) return `Error: ${error.message}`
  return (
    <>
      <div className={DashboardCSS.dashboard}>
        <Menu />
        <div className="home__jobs">
          <EditCompany data={data.getCompany} refetch={refetch} />
        </div>
      </div>
    </>
  )
}

export default withAuth(EditCompanyPage)
