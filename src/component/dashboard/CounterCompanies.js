import React, { useContext } from 'react'
import { useQuery } from '@apollo/client'
import { GET_COMPANIES } from '../../Graphql/Query'
import { AuthContext } from '../../context/auth'
import { Spinner } from '../utils/spinner/Spinner'

export const CounterCompanies = () => {
  const { user } = useContext(AuthContext)
  const { loading, error, data } = useQuery(GET_COMPANIES, {
    variables: {
      username: user.email
    }
  })

  if (loading) return <Spinner />
  if (error) return `Error: ${error.message}`

  return (
        <div className="card card__counter card__counter--comapnies">
            <div className="card__counter--num">
                {data.allCompanies.length}
            </div>
            <div className="card__counter--desc">Empresas registradas</div>
        </div>
  )
}
