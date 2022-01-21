import React, { useContext } from 'react'
import { useQuery } from '@apollo/client'
import { GET_JOBS } from '../../Graphql/Query'
import { Spinner } from '../utils/spinner/Spinner'
import { AuthContext } from '../../context/auth'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'

export const CounterJobs = () => {
  const { user } = useContext(AuthContext)
  const { loading, error, data } = useQuery(GET_JOBS, {
    pollInterval: 3000,
    variables: {
      username: user.email
    }
  })

  if (loading) return <Spinner />
  if (error) return `Error: ${error.message}`

  if (data.getJobs.length < 1) return <Redirect to="/dashboard/empresas" />

  return (
    <div className="card card__counter p-5">
      <div className="card__counter--num">{data.getJobs.length}</div>
      <div className="card__counter--desc">Últimos trabajos publicados</div>
    </div>
  )
}
