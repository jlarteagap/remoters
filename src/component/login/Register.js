import React, { Fragment, useContext, useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { CREATE_USER_MUTATION } from '../../Graphql/Mutation'
import { useMutation } from '@apollo/client'

import { AuthContext } from '../../context/auth'

const Register = (props) => {

    const history = useHistory()
    const context = useContext(AuthContext)
    const [user, setUser] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [register, { error, loading, data}] = useMutation(CREATE_USER_MUTATION)

    const updateState = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const addUser = (e) => {
        e.preventDefault()

        if(error){
            console.log(error)
        }

        register({
            variables: {
                input : {
                    email: user.email,
                    password: user.password,
                    confirmPassword: user.confirmPassword
                }
            }
        }).then(async({data})=> {
            console.log({data})
            context.login(data.register)
        })

        history.push('/')
    }
    return (
        <Fragment>
            <div className="login__titles">
                <h3>Registro</h3>
                <p>Para publicar un anuncio de trabajo, necesitamos que te registres primero.</p>
            </div>
            <div className="card card--login">
                <form onSubmit={e => addUser(e)}>
                    <div className="form__group">
                        <input
                            onChange={updateState}
                            type="email"
                            name="email"
                            placeholder="Correo electrónico"
                            required />
                    </div>
                    <div className="form__group">
                        <input
                            onChange={updateState}
                            type="password"
                            name="password"
                            required
                            placeholder="Contraseña" />
                    </div>
                    <div className="form__group">
                        <input
                            onChange={updateState}
                            type="password"
                            name="confirmPassword"
                            required
                            placeholder="Contraseña" />
                    </div>
                    <div className="center">
                        <button
                            // disabled={ validateForm() }
                            className="btn">Registrarme</button>
                    </div>
                    <small className="center">Ya estas registrado? <Link to="/registro">Ingresa por aquí</Link></small>
                </form>
            </div>
        </Fragment>
    )
}

export default Register
