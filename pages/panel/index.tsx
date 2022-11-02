import React from 'react'
import { LastJobs } from '@components/dashboard/LastJobs'
import { Menu } from '@components/dashboard/Menu'
import DashboardCSS from '@public/css/Dashboard.module.css'
const Dashboard = () => {
  return (
    <div className={DashboardCSS.dashboard}>
      <Menu />
      <LastJobs />
    </div>
  )
}

export default Dashboard
