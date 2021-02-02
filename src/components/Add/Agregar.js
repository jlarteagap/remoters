import React, { Fragment } from 'react';
import { Sidebar } from '../Sidebar/Sidebar';
import Formulario from "./Formulario";

const Agregar = () => {
    return(
        <Fragment>
            <div className="container">
                <Formulario />
                <Sidebar className="sidebar"/>
            </div>
        </Fragment>
    )
}

export default Agregar;