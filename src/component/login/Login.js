import React, { useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { LOGIN_USER } from '../../Graphql/Mutation'
import Error from '../utils/Error'
import { AuthContext } from '../../context/auth'

const Login = () => {
  const [errors, setErrors] = useState({ message: '' })
  const history = useHistory()
  const context = useContext(AuthContext)

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const updateState = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }
  const [login] = useMutation(LOGIN_USER)

  const loginUser = (e) => {
    e.preventDefault()

    login({
      variables: {
        email: user.email,
        password: user.password
      }
    }).then(async ({ data }) => {
      context.login(data.login)
      history.push('/dashboard')
    }).catch((err) => {
      setErrors({
        message: err.message
      })
    })
  }

  return (
        <div className="column box" >
            <div className="login__titles">
                <h3>Iniciar Session</h3>
                <p>Ingresa al panel de administracion para publicar tu anuncio</p>
            </div>
            <div className="">
                <form onSubmit={e => loginUser(e)}>
                  <div className="field">
                    <label className="label">
                      Correo electronico
                    </label>
                    <div className="control">
                      <input type="email" 
                        className="input" 
                        onChange={updateState}
                            name="email"
                            placeholder="Correo electrónico..."
                            required  />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">
                      Contraseña
                    </label>
                    <div className="control">
                      <input 
                        className="input" 
                        onChange={updateState}
                            type="password"
                            name="password"
                            placeholder="Contraseña" />
                    </div>
                  </div>

                    <div className="control">
                        <button
                            className="button btn">Iniciar sesión</button>
                    </div>
                    { errors.message ? <Error message={errors.message} /> : ''}
                    <small>No estas registrado? <Link to="/registro">Registrarse aquí</Link></small>
                </form>
            </div>

        </div>
  )
}

export default Login
