import React, { useContext } from 'react'
import { Form, Formik } from 'formik'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'

import { useMutation } from '@apollo/client'

import { ADD_JOB } from '../../Graphql/Mutation'
import { initialValues } from './services/initialValues'
import { validate } from './services/validate'
import { FormJobs } from './FormJobs'

import { AuthContext } from '../../context/auth'

const AddJobs = () => {
  const { user } = useContext(AuthContext)

  const history = useHistory()
  const randomNumber = Math.floor(Math.random() * 1500)

  const [newJob] = useMutation(ADD_JOB)

  return (
    <div className="box p-5">
      <h3 className="title is-4">Publica una oferta laboral</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={validate}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={values => {
          console.log(values)
          newJob({
            variables: {
              input: {
                active: true,
                category: values.category,
                link: values.link,
                remote: values.remote,
                slug:
                  values.title.replaceAll(/ +/g, '-').toLowerCase() +
                  '-' +
                  randomNumber,
                company: {
                  name: values.company
                },
                location: {
                  country: {
                    name: values.country
                  },
                  city: {
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
                username: {
                  email: user.email
                }
              }
            }
          }).then(async () => {
            await Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Un nuevo empleo se ha publicado',
              showConfirmButton: false,
              timer: 1500
            }).then(history.push('/dashboard'))
          })
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

export default AddJobs
