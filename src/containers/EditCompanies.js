/* eslint-disable react/prop-types */
import { useQuery } from '@apollo/client'
import React from 'react'
import { withRouter } from 'react-router-dom/'
import EditCompany from '../component/company/EditCompany'
import { Menu } from '../component/dashboard/Menu'

import Loading from '../utils/Loading'
import { GET_COMPANY } from '../Graphql/Query'

const EditCompanies = props => {
  const { id } = props.match.params
  const { loading, error, data, refetch } = useQuery(GET_COMPANY, {
    variables: {
      id
    }
  })
  if (loading) return <Loading />
  if (error) return `Error: ${error.message}`
  return (
    <div className="home">
      <Menu />
      <div className="dashboard__companies">
        <EditCompany data={data.getCompany} refetch={refetch} />
      </div>
    </div>
  )
}

export default withRouter(EditCompanies)
