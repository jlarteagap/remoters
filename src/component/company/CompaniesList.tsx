import React, { useContext } from 'react'
import { useQuery } from '@apollo/client'
import { AllCompaniesDocument } from '@service/graphql/graphql'
import { AuthContext } from '../../context/auth'
import Company from './Company'
import Loading from '../../utils/Loading'
import Dashboard from '@public/css/Dashboard.module.css'
import { FaArrowAltCircleRight } from 'react-icons/fa'

const CompaniesList = (): any => {
  const { user } = useContext(AuthContext)

  const { loading, error, data } = useQuery(AllCompaniesDocument, {
    pollInterval: 3000,
    variables: {
      username: user.email
    }
  })

  if (loading) return <Loading />
  if (error) return `Error: ${error.message}`

  return (
    <div className={`${Dashboard.dashboard__companies} mb-5 p-1`}>
      {data.allCompanies.length < 1 ? (
        <article className="message is-success">
          <div className="message-body is-flex is-align-items-center is-justify-content-center">
            <h2 className="title is-4 m-0">
              Ninguna empresa ha sido registrada
            </h2>
            <FaArrowAltCircleRight className="ml-3" />
          </div>
        </article>
      ) : (
        ''
      )}
      {data.allCompanies.map(company => {
        return <Company key={company.id} company={company} />
      })}
    </div>
  )
}

export default CompaniesList
