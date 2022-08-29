import React, { useContext } from 'react'
import { useMutation } from '@apollo/client'
import { UPDATE_JOB } from '../../Graphql/Mutation'
import { GET_JOBS } from '../../Graphql/Query'
import { AuthContext } from '../../context/auth'
import { Form, Formik } from 'formik'

import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'

import { validate } from './services/validate'
import { initialValuesEdit } from './services/initialValues'
import { FormJobs } from './FormJobs'

const EditJob = ({ data, refetch }) => {
  const { user } = useContext(AuthContext)

  const [updateJob] = useMutation(UPDATE_JOB, {
    refetchQueries: [{ query: GET_JOBS }]
  })
  const history = useHistory()

  return (
    <div className="box p-5">
      <h3 className="title is-4">Editar publicación</h3>
      <Formik
        initialValues={initialValuesEdit(data)}
        validationSchema={validate}
        onSubmit={values => {
          updateJob({
            variables: {
              input: {
                id: values.id,
                active: true,
                category: values.category,
                link: values.link,
                remote: values.remote,
                company: {
                  name: values.company
                },
                ubication: {
                  name: values.country,
                  cities: {
                    name: values.city
                  }
                },
                content: {
                  title: values.title,
                  description: values.description,
                  currency: values.currency,
                  salary: values.salary,
                  contract: values.contract
                },
                type: values.type,
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
            <FormJobs />
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
