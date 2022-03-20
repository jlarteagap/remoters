import React, { useContext, useState } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_COMPANY } from '../../Graphql/Mutation'
import { AuthContext } from '../../context/auth'

import UploadLogo from './UploadLogo'
import Inputs from '../inputs/Inputs'

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
          activity: company.activity,
          description: company.description,
          logo: company.logo,
          name: company.name,
          phone: company.phone,
          site: company.site,
          username: user.email
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
        <Inputs
          name={'name'}
          title={'Nombre de la empresa'}
          type={'text'}
          value={company.name}
          updateState={updateState}
        />
        <Inputs
          name={'site'}
          title={'Página Web'}
          type={'text'}
          value={company.site}
          updateState={updateState}
        />
        <Inputs
          name={'phone'}
          title={'Teléfono'}
          type={'text'}
          value={company.phone}
          updateState={updateState}
        />
        <Inputs
          name={'activity'}
          title={'Actividad empresarial'}
          type={'text'}
          value={company.activity}
          updateState={updateState}
        />
        <div className="field form__style">
          <textarea
            className="textarea"
            onChange={updateState}
            name="description"
            type="text"
            value={company.description}
          />
          <label className="label">Descripción de la empresa</label>
        </div>
        <button className="button btn">Agregar empresa</button>
      </form>
    </div>
  )
}

export default Form
