import React from 'react'
import CompaniesList from '../component/company/CompaniesList'
import Form from '../component/company/Form'
import { Menu } from '../component/dashboard/Menu'
const Companies = () => (
  <div className="home">
    <Menu />
    <div className="dashboard__companies">
      <CompaniesList />
    </div>
    <div className="dashboard__companies--form">
      <Form />
    </div>
  </div>
)

export default Companies
