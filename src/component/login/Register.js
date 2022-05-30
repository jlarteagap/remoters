import React, { useContext, useState } from 'react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'

import { useHistory, Link } from 'react-router-dom'
import { CREATE_USER_MUTATION } from '../../Graphql/Mutation'
import { useMutation } from '@apollo/client'
import Error from '../../utils/Error'
import { AuthContext } from '../../context/auth'

import { InputFields } from '../../utils/form/Fields'

const Register = () => {
  const [errors, setErrors] = useState({ message: '' })
  const history = useHistory()
  const context = useContext(AuthContext)

  const [register] = useMutation(CREATE_USER_MUTATION)

  const validate = Yup.object({
    email: Yup.string()
      .email('Correo no válido')
      .required('Necesitamos correo para ingresar'),
    password: Yup.string()
      .required('Ingrese una contraseña')
      .min(
        6,
        'Su contraseña de es demasiada corta, ingrese mínimo 6 carácteres'
      ),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref('password'), null],
      'Las contraseñas no coinciden'
    )
  })

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
                  context.login(data.register)
                  history.push('/dashboard')
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
            Ya estas registrado? <Link to="/login">Ingresa por aquí</Link>
          </small>
        </div>
      </div>
    </div>
  )
}

export default Register
