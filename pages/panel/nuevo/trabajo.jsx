import React from 'react'
import AddJobs from '@components/add/AddJobs.js'
import Seo from '@components/seo/seo'
import { Menu } from '@components/dashboard/Menu'
import DashboardCSS from '@public/css/Dashboard.module.css'
import withAuth from '@hoc/withAuth'
const trabajo = () => {
  return (
    <>
      <Seo title="Agregar nuevo trabajo" />
      <div className={DashboardCSS.dashboard}>
        <Menu />
        <div className="home__jobs">
          <AddJobs />
        </div>
      </div>
    </>
  )
}

export default withAuth(trabajo)
