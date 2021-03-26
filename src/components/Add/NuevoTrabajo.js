import React, { Fragment, useState } from 'react'
import { Mutation } from 'react-apollo'
import { ADD_JOB } from '../../mutation'
import { withRouter } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import './Forms.css'

import Error from '../General/Error'

const NuevoTrabajo = (props) => {

    const [data, setData] = useState(
        {company: '',
        position: '',
        category: '', 
        city: '', 
        link: '', 
        remote: '', 
        email: ''}
    )
    const [isRemote, setRemote] = useState(false)
    const [error, setError] = useState({error: false})

    const changeHandler = () => {
        setRemote(!isRemote);
    };

    const inputData = e => {
        setData({
            ...data,
            remote: isRemote,
            [e.target.name]: e.target.value
        })
    }
    return (
        <Fragment>
            <Mutation mutation={ADD_JOB}
            onCompleted={() => props.history.push('/')}
        >
            {newJob => (
                <div className="content">
                    
                    <form className="form"
                        onSubmit={e => {
                            e.preventDefault();
                            const { company, position, category, city, link, remote, email } = data
                            
                            // Validations
                            if(company === ''|| position === '' || category === '' || city === '' || link === ''|| remote === '' || email === ''){
                                setError({
                                    error: true
                                })
                                return
                            }
                            setError({
                                error: false
                            })
                            
                            // SEND DATA TO MONGO 
                            const input = {
                                company,
                                position,
                                category,
                                city,
                                link,
                                remote,
                                email
                            }

                            newJob({
                                variables: { input }
                            })
                        }
                        }
                    >
                        <div className="form__group">
                            <label>Nombre de la Empresa</label>
                            <input
                                type="text"
                                placeholder="Ej: Acme Corp"
                                name="company"
                                onChange={inputData}
                                
                            />
                        </div>
                        <div className="form__group">
                            <label>Titulo del puesto vacante</label>
                            <input 
                            type="text" 
                            placeholder="Ej: Product Manager" 
                            name="position" onChange={inputData}
                            
                            />
                        </div>
                        <div className="form__group">
                            <label>Categoria</label>
                            <select name="category" onChange={inputData} >
                                <option value="">Elegir...</option>
                                <option value="SOFTWARE_DEVELOP">Software Develop</option>
                                <option value="SOCIAL_MEDIA">Social Media</option>
                                <option value="DESIGNER">Diseño</option>
                                <option value="SALES">Comercial</option>
                            </select>
                        </div>
                        <div className="form__group">
                            <label>Ciudad</label>
                            <select name="city" onChange={inputData} >
                                <option value="">Elegir...</option>
                                <option value="SANTA_CRUZ">Santa Cruz</option>
                                <option value="LA_PAZ">La Paz</option>
                                <option value="COCHABAMBA">Cochabamba</option>
                                <option value="TARIJA">Tarija</option>
                                <option value="ORURO">Oruro</option>
                                <option value="POTOSI">Potosi</option>
                                <option value="CHUQUISACA">Chuquisaca</option>
                                <option value="BENI">Beni</option>
                                <option value="PANDO">Pando</option>
                            </select>
                        </div>
                        <div className="form__group">
                            <label>Enlace para postular</label>
                            <input type="text" placeholder="http://" name="link" onChange={inputData} />
                        </div>
                        <div className="form__group">
                            <label className="remote">
                                <span className="">Trabajo Remoto?</span>
                                <input
                                    className=""
                                    name="remote"
                                    type="checkbox"
                                    checked={isRemote}
                                    onChange={changeHandler}
                                />
                                <span className={isRemote ? "btn remote-btn btn-blue" : "btn remote-btn false"}>{isRemote ? "SI" : "NO"}</span>
                            </label>
                           
                                
                        </div>
                        <div className="form__group">
                            <label>Email de contacto</label>
                            <input type="text" placeholder="" name="email" onChange={inputData} />
                        </div>
                        { error.error ? <Error message="Todos los campos deben ser llenados correctamente" /> : ''}
                        
                        <button type="submit" className="btn"> Enviar publicación</button>

                    </form>
                </div>
            )}
        </Mutation>
            <Sidebar className="sidebar"/>
        </Fragment>
    )
}

export default withRouter(NuevoTrabajo)