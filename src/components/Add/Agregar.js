import React, { Fragment, useState } from 'react';
import { Sidebar } from '../Sidebar/Sidebar';
import Formulario from "./Formulario";

const Agregar = () => {
    const[data, setData] = useState([])

    const sendDataForm = (datos)=> {
        setData({
            data: datos
        })
    }
    return(
        <Fragment>
            <div className="container">
                <Formulario sendDataForm = {sendDataForm}/>
                <Sidebar className="sidebar"/>
            </div>
        </Fragment>
    )
}

export default Agregar;