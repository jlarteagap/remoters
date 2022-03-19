import React, { useContext, useState } from 'react'
import { useMutation } from '@apollo/client'
import { UPDATE_COMPANY } from '../../Graphql/Mutation'
import { AuthContext } from '../../context/auth'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import UploadLogo from './UploadLogo'

const EditCompany = ({ data, refetch }) => {
  const [company, setCompany] = useState(data)
  const { user } = useContext(AuthContext)
  const history = useHistory()

  const [createCompany] = useMutation(UPDATE_COMPANY)

  const updateState = e => {
    setCompany({
      ...company,
      [e.target.name]: e.target.value
    })
  }

  const logoUpdate = url => {
    setCompany({
      ...company,
      logo: url
    })
  }
  const formCompany = e => {
    e.preventDefault()

    createCompany({
      variables: {
        input: {
          activity: company.activity,
          description: company.description,
          id: company.id,
          logo: company.logo,
          name: company.name,
          phone: company.phone,
          site: company.site,
          username: user.email
        }
      }
    }).then(
      refetch().then(() => {
        history.push('/dashboard/empresas')
      })
    )
  }

  return (
    <div className="box">
      <h3 className="title is-5">Registro de empresas</h3>
      <form className="form" onSubmit={e => formCompany(e)}>
        <div className="field">
          <UploadLogo logoUpdate={logoUpdate} logo={company.logo} />
        </div>
        <div className="field">
          <label className="label">Nombre de la empresa</label>
          <input
            defaultValue={company.name}
            className="input"
            onChange={updateState}
            name="name"
            type="text"
            placeholder="Nombre de la empresa"
            required
          />
        </div>
        <div className="field">
          <label className="label">Página Web</label>
          <input
            className="input"
            onChange={updateState}
            name="site"
            type="text"
            placeholder="Nombre de la empresa"
            defaultValue={company.site}
            value={company.site}
            required
          />
        </div>
        <div className="field">
          <label className="label">Teléfono</label>
          <input
            className="input"
            onChange={updateState}
            name="phone"
            type="text"
            defaultValue={company.phone}
            value={company.phone}
            placeholder="Teléfono"
          />
        </div>
        <div className="field">
          <label className="label">Actividad empresarial</label>
          <input
            className="input"
            onChange={updateState}
            name="activity"
            type="text"
            defaultValue={company.activity}
            value={company.activity}
            placeholder="Defina en una palabra su actividad empresarial"
          />
        </div>
        <div className="field">
          <label className="label">Descripción de la empresa</label>
          <textarea
            className="textarea"
            onChange={updateState}
            name="description"
            type="text"
            defaultValue={company.description}
            value={company.description}
            placeholder="Pequeño resumen de su empresa."
          />
        </div>
        <button className="button btn">Actualizar empresa</button>
      </form>
    </div>
  )
}

EditCompany.propTypes = {
  data: PropTypes.object,
  refetch: PropTypes.func
}
export default EditCompany
