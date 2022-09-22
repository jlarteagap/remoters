import React, { useContext } from 'react'
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
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={values => {
          updateJob({
            variables: {
              input: {
                id: values.id,
                active: values.active,
                category: values.category,
                company: {
                  name: values.company
                },
                link: values.link,
                remote: values.remote,
                username: {
                  email: user.email
                },
                content: {
                  currency: values.currency,
                  salary: values.salary,
                  title: values.title,
                  contract: values.contract,
                  description: values.description
                },
                location: {
                  country: {
                    name: values.country
                  },
                  city: {
                    name: values.city
                  }
                },
                updateAt: new Date().toISOString(),
                deletedAt: new Date(
                  new Date().setDate(new Date().getDate() + 7)
                ).toISOString()
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
            <FormJobs
              location={data.location.city.name}
              payment={data.content.salary}
            />
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
