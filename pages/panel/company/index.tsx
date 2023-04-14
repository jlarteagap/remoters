import React from 'react'
import CompaniesList from '@components/company/CompaniesList'
import CreateANewCompany from '@components/company/CreateANewCompany'
import { Menu } from '@components/dashboard/Menu'
import DashboardCSS from '@public/css/Dashboard.module.css'
import withAuth from '@hoc/withAuth'

const Company = () => {
  return (
        <>
       <div className={DashboardCSS.dashboard}>
            <Menu />
            <CompaniesList />
            <CreateANewCompany />
       </div>
        </>
  )
}

export default withAuth(Company)
