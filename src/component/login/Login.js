import React, { Fragment, useState } from 'react'
import { Link, useHistory } from "react-router-dom"
import { useMutation } from "@apollo/client"
import { AUTENTICATE_USER } from '../../Graphql/Mutation'

const Login = (props) => {
    const history = useHistory()
    const[user, setUser] = useState({
        email: '',
        password: ''
    })
    
    const UpdateState = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const[autenticateUser, {error, data}] = useMutation( AUTENTICATE_USER )
    
    const loginUser = (e) => {
        e.preventDefault()


        autenticateUser({
            variables: {
                email: user.email,
                password: user.password
            }
        }).then(async({data})=> {
            localStorage.setItem('token', data.autenticateUser.token)

            await props.refetch
        })

        history.push('/')
    }

    return (
        <Fragment>
            <div className="login__titles">
                <h3>Iniciar Session</h3>
                <p>Ingresa al panel de administracion para publicar tu anuncio</p>
            </div>
            <div className="card card--login">

                <form onSubmit={e => loginUser(e)}>
                    <div className="form__group">
                        <input
                            onChange={UpdateState}
                            type="email"
                            name="email"
                            placeholder="Correo electrónico..."
                            required />
                    </div>
                    <div className="form__group">
                        <input
                            onChange={UpdateState}
                            type="password"
                            name="password"
                            placeholder="Contraseña" />
                    </div>
                    <div className="center">
                        <button
                            // disabled={validateForm}
                            className="btn">Iniciar sesión</button>
                    </div>
                    <small>No estas registrado? <Link to="/registro">Registrarse aquí</Link></small>
                </form>
            </div>

        </Fragment>
    )
}

export default Login