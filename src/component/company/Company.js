import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_COMPANY } from '../../Graphql/Mutation'
// import { useHistory } from 'react-router-dom'
import UploadLogo from './UploadLogo'

const Company = () => {
    // const history = useHistory()
    const initialState = {
        name: '',
        site: '',
        description: '',
        logo: ''
    }
    const [company, setCompany] = useState(initialState)

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
                    logo: '',
                    user: ''
                }
            }
        }).then(clearState)

    }

    return(
        <div className="card">
            <h3>Registro de empresas</h3>
            <form className="form" onSubmit={e => formCompany(e)}>
                <div className="form__group">
                   <UploadLogo />
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

export default Company