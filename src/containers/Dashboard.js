import React from 'react'
import '../component/dashboard/dashboard.css'
import { Menu } from '../component/dashboard/Menu'

import { LastJobs } from '../component/dashboard/LastJobs'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Menu />
      <LastJobs />
    </div>
  )
}

export default Dashboard
