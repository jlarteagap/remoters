import React, { useContext, useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { CREATE_USER_MUTATION } from '../../Graphql/Mutation'
import { useMutation } from '@apollo/client'
import Error from '../../utils/Error'
import { AuthContext } from '../../context/auth'

const Register = () => {
  const [errors, setErrors] = useState({ message: '' })
  const history = useHistory()
  const context = useContext(AuthContext)
  const [user, setUser] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [register] = useMutation(CREATE_USER_MUTATION)

  const updateState = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const addUser = async e => {
    e.preventDefault()
    register({
      variables: {
        input: {
          email: user.email,
          password: user.password,
          confirmPassword: user.confirmPassword
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
  }
  return (
    <div className="column login__box is-flex is-justify-content-center is-align-items-center">
      <div className="box">
        <div className="login__titles is-medium">
          <h3 className="title">Registro</h3>
          <p className="subtitle is-6">
            Para publicar un anuncio de trabajo, necesitamos que te registres
            primero.
          </p>
        </div>
        <div className="mt-5">
          <form onSubmit={e => addUser(e)}>
            <div className="field">
              <label className="label">Correo electronico</label>
              <div className="control">
                <input
                  onChange={updateState}
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Correo electrónico"
                  required
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Contraseña</label>
              <div className="control">
                <input
                  onChange={updateState}
                  type="password"
                  name="password"
                  className="input"
                  required
                  placeholder="Contraseña"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Repetir Contraseña</label>
              <div className="control">
                <input
                  onChange={updateState}
                  type="password"
                  name="confirmPassword"
                  required
                  className="input"
                  placeholder="Contraseña"
                />
              </div>
            </div>
            <div className="control">
              <button className="button btn">Registrarme</button>
            </div>
            {errors.message ? <Error message={errors.message} /> : ''}
            <small className="center">
              Ya estas registrado? <Link to="/registro">Ingresa por aquí</Link>
            </small>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
