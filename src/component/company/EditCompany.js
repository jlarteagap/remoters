import React, { useContext } from 'react'
import { useMutation } from '@apollo/client'
import {
  GetCategoryDocument,
  UpdateCompanyDocument
} from '@service/graphql/graphql'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import { Form, Formik } from 'formik'
import { FormCompany } from './FormCompany'
import { validate } from './services/validate'
import { AuthContext } from '@context/auth'

const EditCompany = ({ data, refetch }) => {
  const { user } = useContext(AuthContext)
  const router = useRouter()
  const initialValues = {
    activity: data.activity,
    description: data.description,
    name: data.name,
    phone: data.phone,
    site: data.site
  }

  const [createCompany] = useMutation(UpdateCompanyDocument, {
    refetchQueries: [{ query: GetCategoryDocument }]
  })

  return (
    <div className="box">
      <h3 className="title is-5">Registro de empresas</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={validate}
        onSubmit={(value, { resetForm }) => {
          createCompany({
            variables: {
              input: {
                activity: value.activity,
                description: value.description,
                id: data.id,
                name: value.name,
                phone: value.phone,
                site: value.site,
                username: user.email
              }
            }
          }).then(
            refetch().then(() => {
              router.push('/panel/company')
            })
          )

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

EditCompany.propTypes = {
  data: PropTypes.object,
  refetch: PropTypes.func
}
export default EditCompany
