/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Form, Formik } from 'formik'
import * as Yup from 'yup'


import { useMutation } from '@apollo/client'
import { LOGIN_USER } from '../../Graphql/Mutation'
import Error from '../../utils/Error'
import { AuthContext } from '../../context/auth'

import { InputFields } from '../../utils/form/Fields'

const Login = () => {
  const [errors, setErrors] = useState({ message: '' })
  const router = useRouter()
  const context = useContext(AuthContext)

  const [login] = useMutation(LOGIN_USER)

  const validate = Yup.object({
    email: Yup.string()
      .email('Correo no válido')
      .required('Necesitamos correo para ingresar'),
    password: Yup.string().required('Ingrese una contraseña')
  })

  return (
    <div className="column login__box is-flex is-justify-content-center is-align-items-center">
      <div className="box">
        <div className="login__titles is-medium has-text-centered">
          <h3 className="title">Iniciar sesión</h3>
          <p className="subtitle is-6">
            Ingresa al panel de administracion para publicar tu anuncio
          </p>
        </div>
        <div className="mt-5">
          <Formik
            initialValues={{
              email: '',
              password: ''
            }}
            validationSchema={validate}
            onSubmit={values => {
              login({
                variables: {
                  email: values.email,
                  password: values.password
                }
              })
                .then(async ({ data }) => {
                  context.login(data.login)
                  router.push('/dashboard')
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
                <button type="submit" className="button btn mt-2">
                  Ingresar
                </button>

                {errors.message ? <Error message={errors.message} /> : ''}
              </Form>
            )}
          </Formik>
          <small>
            No estas registrado? <Link href="/registro"><a>Registrarse aquí</a></Link>
          </small>
        </div>
      </div>
    </div>
  )
}

export default Login
