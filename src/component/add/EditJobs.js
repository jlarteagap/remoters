import React, { useContext } from 'react'
import { useMutation } from '@apollo/client'

import { UpdateJobDocument, GetJobsDocument } from '@service/graphql/graphql'
import { AuthContext } from '../../context/auth'
import { Form, Formik } from 'formik'

import { FormJobs } from './FormJobs'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'

import PropTypes from 'prop-types'

import { validate } from './services/validate'
import { initialValuesEdit } from './services/initialValues'

const EditJob = ({ data, refetch }) => {
  console.log(data)
  const { user } = useContext(AuthContext)

  const [updateJob] = useMutation(UpdateJobDocument, {
    refetchQueries: [{ query: GetJobsDocument }]
  })
  const router = useRouter()

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
                deletedAt: new Date()
                  .toISOString()
                  .setDate(new Date().getDate() + 7)
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
                router.push('/panel')
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
