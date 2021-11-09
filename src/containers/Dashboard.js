import React from 'react'
import '../component/dashboard/dashboard.css'
import { Menu } from '../component/dashboard/Menu'
import { CounterJobs } from '../component/dashboard/CounterJobs'
import { CounterCompanies } from '../component/dashboard/CounterCompanies'
import { LastJobs } from '../component/dashboard/LastJobs'

const Dashboard = () => {
  return (
        <div className="dashboard">
            <Menu />
            <CounterJobs />
            <CounterCompanies />
            <LastJobs />
        </div>
  )
}

export default Dashboard
