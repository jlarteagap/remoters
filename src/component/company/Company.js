import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_COMPANY } from '../../Graphql/Mutation'


const Company = () => {
    const [company, setCompany] = useState({
        name: '',
        site: '',
        description: '',
    })

    const [createCompany, {error}] =useMutation(CREATE_COMPANY)

    const updateState = (e) => {
        setCompany({
            ...company, 
            [e.target.name]: e.target.value
        })
    }
    const formCompany = (e) => {
        e.preventDefault()

        console.log(company)

        if (error) {
            console.log(error)
        }
        createCompany({
            variables: {
                name: company.name,
                site: company.site,
                description: company.description,
                logo: '',
                user: ''
            }
        }) 
    }

    return(
        <div className="card">
            <h3>Registro de empresas</h3>
            <form className="form" onSubmit={e => formCompany(e)}>
                <div className="form__group">
                    <label>Nombre de la empresa</label>
                    <input
                        onChange={updateState}
                        name="name"
                        type="text" 
                        placeholder="Nombre de la empresa"
                        required />
                </div>
                <div className="form__group">
                    <label>Página Web</label>
                    <input
                        onChange={updateState}
                        name="site"
                        type="text" 
                        placeholder="Nombre de la empresa"
                        required />
                </div>
                <div className="form__group">
                    <label>Descripción de la empresa</label>
                    <textarea
                        onChange={updateState}
                        name="description"
                        type="text" 
                        placeholder="Nombre de la empresa" />
                </div>
                <button className="btn">Agregar empresa</button>
            </form>
        </div>
    )
}

export default Company