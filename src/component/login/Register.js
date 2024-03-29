import React, { useContext, useState } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'
import { Form, Formik } from 'formik'

import { CREATE_USER_MUTATION } from '../../../service/mutation'
import { useMutation } from '@apollo/client'
import Error from '../../utils/Error'
import { AuthContext } from '../../context/auth'

import { InputFields } from '../../utils/form/Fields'
import { validate } from './services/validate'

const Register = () => {
  const [errors, setErrors] = useState({ message: '' })
  const router = useRouter()
  const context = useContext(AuthContext)

  const [register] = useMutation(CREATE_USER_MUTATION)

  return (
    <div className="column login__box is-flex is-justify-content-center is-align-items-center">
      <div className="box">
        <div className="login__titles is-medium has-text-centered">
          <h3 className="title">Registro</h3>
          <p className="subtitle is-6">
            Para publicar un anuncio de trabajo, necesitamos que te registres
            primero.
          </p>
        </div>
        <div className="mt-5">
          <Formik
            initialValues={{
              email: '',
              password: '',
              confirmPassword: ''
            }}
            validationSchema={validate}
            onSubmit={async values => {
              register({
                variables: {
                  input: {
                    email: values.email,
                    password: values.password,
                    confirmPassword: values.confirmPassword
                  }
                }
              })
                .then(async ({ data }) => {
                  console.log(data)
                  context.login(data.register)
                  router.push('/dashboard/agregar')
                })
                .catch(err => {
                  setErrors({
                    message: err.message
                  })
                })
            }}
          >
            {formik => (
              <Form>
                <InputFields
                  label="Correo electrónico"
                  type="email"
                  name="email"
                  placeholder="Correo electrónico..."
                />
                <InputFields
                  label="Contraseña"
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                />
                <InputFields
                  label="Confirme su contraseña"
                  type="password"
                  name="confirmPassword"
                  placeholder="Contraseña"
                />
                <div className="control">
                  <button type="submit" className="button btn">
                    Registrarme
                  </button>
                </div>
                {errors.message ? <Error message={errors.message} /> : ''}
              </Form>
            )}
          </Formik>
          <small className="center pt-5">
            Ya estas registrado? <Link href="/login">Ingresa por aquí</Link>
          </small>
        </div>
      </div>
    </div>
  )
}

export default Register
