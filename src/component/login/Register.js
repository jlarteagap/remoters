import React, { Fragment, useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { CREATE_USER_MUTATION } from '../../Graphql/Mutation'
import { useMutation } from '@apollo/client'

const Register = () => {
    const history = useHistory()
    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const [createUser, { error }] = useMutation(CREATE_USER_MUTATION)

    const UpdateState = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const addUser = (e) => {
        e.preventDefault()
 
        if (error) {
            console.log(error)
        }

        createUser({
            variables: {
                email: data.email,
                password: data.password,
                role: 'User',
                name: '',
                lastname: '',
                company: '',
            }
        })

        history.push('/')
    }

    const validateForm = () => {
        const {email, password} = data
        const notValidate = !email || !password || password.length <= 1
        return notValidate
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
                            onChange={UpdateState}
                            type="email"
                            name="email"
                            placeholder="Correo electrónico"
                            required />
                    </div>
                    <div className="form__group">
                        <input
                            onChange={UpdateState}
                            type="password"
                            name="password"
                            required
                            placeholder="Contraseña" />
                    </div>
                    <div className="center">
                        <button
                            disabled={ validateForm() }
                            className="btn">Registrarme</button>
                    </div>
                    <small className="center">Ya estas registrado? <Link to="/registro">Ingresa por aquí</Link></small>
                </form>
            </div>
        </Fragment>
    )
}

export default Register
