import React, { useContext, useState } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_COMPANY } from '../../Graphql/Mutation'
import { AuthContext } from '../../context/auth'

import UploadLogo from './UploadLogo'

const initialState = {
    name: '',
    site: '',
    description: '',
    logo: ''
}
const Form = () => {
    const [company, setCompany] = useState(initialState)
    const { user } = useContext(AuthContext)
    // const history = useHistory()

    const [createCompany, {error}] = useMutation(CREATE_COMPANY)
    const clearState = () => {
        setCompany({ ...initialState });
      };

    const updateState = (e) => {
        setCompany({
            ...company, 
            [e.target.name]: e.target.value
        })
    }

    const logoUpdate = (url) => {
        setCompany({
            ...company,
            logo: url
        })
    }
    const formCompany = (e) => {
        e.preventDefault()

        if (error) {
            console.log(error)
        }
        createCompany({
            variables: {
                input: {
                    name: company.name,
                    site: company.site,
                    description: company.description,
                    logo: company.logo,
                    username: user.email
                }
            }
        }).then(clearState)

    }

    return(
        <div className="card">
            <h3>Registro de empresas</h3>
            <form className="form" onSubmit={e => formCompany(e)}>
                <div className="form__group">
                   <UploadLogo logoUrl = {logoUpdate}  />
                </div>
                <div className="form__group">
                    <label>Nombre de la empresa</label>
                    <input
                        onChange={updateState}
                        name="name"
                        type="text" 
                        placeholder="Nombre de la empresa"
                        value={company.name}
                        required />
                </div>
                <div className="form__group">
                    <label>Página Web</label>
                    <input
                        onChange={updateState}
                        name="site"
                        type="text" 
                        placeholder="Nombre de la empresa"
                        value={company.site}
                        required />
                </div>
                <div className="form__group">
                    <label>Descripción de la empresa</label>
                    <textarea
                        onChange={updateState}
                        name="description"
                        type="text"
                        value={company.description}
                        placeholder="Nombre de la empresa" />
                </div>
                <button className="btn">Agregar empresa</button>
            </form>
        </div>
    )
}

export default Form