import React, { useContext, useState } from 'react'
import { useMutation } from '@apollo/client'
import { Form, Formik } from 'formik'

import { CompanyDocument } from '@service/graphql/graphql'
import { AuthContext } from '../../context/auth'
import Dashboard from '@public/css/Dashboard.module.css'
// import UploadLogo from './UploadLogo'

import { FormCompany } from './FormCompany'

const initialState = {
  name: '',
  site: '',
  description: '',
  logo: '',
  phone: ''
}
const CreateANewCompany = () => {
  const [company, setCompany] = useState(initialState)
  const [getEditor, setGetEditor] = useState(null)
  const { user } = useContext(AuthContext)
  // const history = useHistory()

  const [createCompany, { error }] = useMutation(CompanyDocument)
  const clearState = () => {
    setCompany({ ...initialState })
  }

  // const logoUpdate = url => {
  //   setCompany({
  //     ...company,
  //     logo: url
  //   })
  // }
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
    <div className={`${Dashboard.dashboard__companiesNewForm} box`}>
      <h3 className="title is-5">Registro de empresas</h3>
      <form className="form" onSubmit={e => formCompany(e)}>
        {/* <div className="field">
          <UploadLogo logoUpdate={logoUpdate} logo={company.logo} />
        </div> */}
        {/* <Inputs
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
        /> */}
        <Formik>
          {formik => (
            <Form>
              <FormCompany getEditor={setGetEditor} />
            </Form>
          )}
        </Formik>

      </form>
    </div>
  )
}

export default CreateANewCompany
