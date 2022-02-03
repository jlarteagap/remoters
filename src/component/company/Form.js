import React, { useContext, useState } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_COMPANY } from '../../Graphql/Mutation'
import { AuthContext } from '../../context/auth'

import UploadLogo from './UploadLogo'

const initialState = {
  name: '',
  site: '',
  description: '',
  logo: '',
  phone: ''
}
const Form = () => {
  const [company, setCompany] = useState(initialState)
  const { user } = useContext(AuthContext)
  // const history = useHistory()

  const [createCompany, { error }] = useMutation(CREATE_COMPANY)
  const clearState = () => {
    setCompany({ ...initialState })
  }

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

    if (error) {
      console.log(error)
    }
    createCompany({
      variables: {
        input: {
          name: company.name,
          site: company.site,
          description: company.description,
          logo: company.logo,
          username: user.email,
          activity: company.activity,
          phone: company.phone
        }
      }
    }).then(clearState)
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
            className="input"
            onChange={updateState}
            name="name"
            type="text"
            placeholder="Nombre de la empresa"
            value={company.name}
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
            value={company.description}
            placeholder="Pequeño resumen de su empresa."
          />
        </div>
        <button className="button btn">Agregar empresa</button>
      </form>
    </div>
  )
}

export default Form
