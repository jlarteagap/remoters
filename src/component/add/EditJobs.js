import React, { useContext, useState } from 'react'
import { useMutation } from '@apollo/client'
import { UPDATE_JOB } from '../../Graphql/Mutation'
import { GET_JOBS } from '../../Graphql/Query'
import { AuthContext } from '../../context/auth'
import { Form, Formik } from 'formik'

import { FormJobs } from './FormJobs'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'

import { validate } from './services/validate'
import { initialValuesEdit } from './services/initialValues'

const EditJob = ({ data, refetch }) => {
  console.log(data)
  const [jobs] = useState(data)

  const { user } = useContext(AuthContext)

  const [updateJob] = useMutation(UPDATE_JOB, {
    refetchQueries: [{ query: GET_JOBS }]
  })
  const history = useHistory()

  return (
    <div className="box p-5">
      <h3 className="title is-4">Editar publicación</h3>
      <Formik
        initialValues={initialValuesEdit}
        validationSchema={validate}
        onSubmit={values => {
          console.log(values)
          updateJob({
            variables: {
              input: {
                id: values.id,
                active: false,
                category: values.category,
                city: values.city,
                country: values.country,
                link: values.link,
                money: values.money,
                position: values.position,
                remote: values.remote,
                salary: values.salary,
                type: values.type,
                companySimple: values.companySimple,
                username: {
                  email: user.email
                }
              }
            }
          }).then(
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Publicación actualizada correctamente.',
              showConfirmButton: false,
              timer: 1500
            }).then(
              refetch().then(() => {
                history.push('/dashboard')
              })
            )
          )
        }}
      >
        {formik => (
          <Form>
            <FormJobs defaultValues={jobs} />
          </Form>
        )}
      </Formik>
    </div>
  )
}

EditJob.propTypes = {
  data: PropTypes.object,
  refetch: PropTypes.func
}
export default EditJob
