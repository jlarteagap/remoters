import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_COMPANIES } from '../../Graphql/Query'
import Loading from '../../utils/Loading'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Companies = ({ user, onChange, companieJob }) => {
  const { loading, error, data } = useQuery(GET_COMPANIES, {
    pollInterval: 3000,
    variables: {
      username: user
    }
  })

  const defaultValue = companieJob ? companieJob[0].name : ''

  if (loading) return <Loading />
  if (error) return `Error: ${error.message}`
  const updateState = e => {
    onChange(data.allCompanies.filter(filter => filter.name === e.target.value))
  }

  return (
    <div className="field form__style">
      {data.allCompanies.length < 1 ? (
        <div className="message is-success">
          <div className="message-body">
            <h4 className="title is-6">
              Primero debe agregar una empresa.{' '}
              <Link href="/dashboard/empresas">AQUI</Link>
            </h4>
          </div>
        </div>
      ) : (
        ''
      )}

      <div className="select is-fullwidth">
        <select
          className="form__style--select"
          onChange={e => updateState(e)}
          defaultValue={defaultValue}
        >
          <option>---</option>
          {data.allCompanies.map(company => {
            return (
              <option key={company.id} name="name" value={company.name}>
                {company.name}
              </option>
            )
          })}
        </select>
        <label className="label">Empresa</label>
      </div>
    </div>
  )
}
Companies.propTypes = {
  user: PropTypes.string,
  onChange: PropTypes.func,
  companieJob: PropTypes.array
}
export default Companies
