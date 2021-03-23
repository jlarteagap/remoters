import React, { Fragment, useState } from 'react';
import { Sidebar } from '../Sidebar/Sidebar';
import Formulario from "./Formulario";
import {withRouter} from 'react-router-dom'

import { ADD_JOB } from '../../mutation'
import { Mutation } from 'react-apollo'

const Agregar = () => {
    const[data, setData] = useState([])

    const sendDataForm = (datos)=> {
        const {company, jobtitle, category, city, link, email, remote} = datos

        const input = {
            company, 
            jobtitle, 
            category, 
            city, 
            link,
            remote,
            email
        }

        setData({
            data: input
        })
    }

    console.log(data)

    return(
        <Fragment>
            <div className="container">
                <Mutation 
                    mutation={ADD_JOB} 
                    variables={data}
                    
                >
                    {newjob => (
                        <Formulario 
                            sendDataForm = {sendDataForm}
                        />
                    )}
                </Mutation>

                <Sidebar className="sidebar"/>
            </div>
        </Fragment>
    )
}

export default withRouter(Agregar);