import React, { useContext } from 'react'
import { useMutation } from '@apollo/client'
import { Form, Formik } from 'formik'

import { CompanyDocument } from '@service/graphql/graphql'
import { AuthContext } from '../../context/auth'
import Dashboard from '@public/css/Dashboard.module.css'
import { initialValues } from './services/initialValues'
import { validate } from './services/validate'
import { FormCompany } from './FormCompany'

const CreateANewCompany = () => {
  const { user } = useContext(AuthContext)
  const [createCompany] = useMutation(CompanyDocument)

  return (
    <div className={`${Dashboard.dashboard__companiesNewForm} box`}>
      <h3 className="title is-5">Registro de empresas</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={validate}
        onSubmit={(values, { resetForm }) => {
          createCompany({
            variables: {
              input: {
                activity: values.activity,
                description: values.description,
                logo: values.logo,
                name: values.name,
                phone: values.phone,
                site: values.site,
                username: user.email
              }
            }
          }).then(async () => {
            console.log('Success')
          })

          resetForm({})
        }}
      >
        {formik => (
          <Form>
            <FormCompany />
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default CreateANewCompany
