import React, { useContext } from 'react'
import { useQuery } from '@apollo/client'
import { GET_COMPANIES } from '../../Graphql/Query'

import { AuthContext } from '../../context/auth'
import Company from './Company'
import AppContext from '../../context/AppContext'
import Paginator from '../utils/Paginator'
import Loading from '../utils/Loading'

const CompaniesList = () => {
  const { user } = useContext(AuthContext)
  const { nextPage, prevPage, page } = useContext(AppContext)

  const { loading, error, data } = useQuery(GET_COMPANIES, {
    pollInterval: 3000,
    variables: {
      username: user.email,
      limit: page.limit,
      offset: page.offset
    }
  })

  if (loading) return <Loading />
  if (error) return `Error: ${error.message}`

  return (
            <div className="dashboard__companies__list">
                {data.allCompanies.map(company => {
                  return (
                        <Company
                        key = {company.id}
                        company = {company}
                        />
                  )
                })}
                <Paginator
                    actual = {page.actual}
                    total = {data.totalJobs}
                    limit = {page.limit}
                    prevPage = {prevPage}
                    nextPage = {nextPage}
                />
            </div>
  )
}

export default CompaniesList
