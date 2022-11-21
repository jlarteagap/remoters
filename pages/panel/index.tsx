import React from 'react'
import LastJobs from '@components/dashboard/LastJobs'
import { Menu } from '@components/dashboard/Menu'
import DashboardCSS from '@public/css/Dashboard.module.css'

import withAuth from '../../src/hoc/withAuth'
import Seo from '@components/seo/seo'
const Dashboard = () => {
  return (
    <>
      <Seo title="Panel de administracion" />
      <div className={DashboardCSS.dashboard}>
        <Menu />
        <LastJobs />
      </div>
    </>
  )
}

export default withAuth(Dashboard)
