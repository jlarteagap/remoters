import React from 'react'

const Company = () => {
    return(
        <div className="card">
            <h3>Registro de empresas</h3>
            <div className="form">
                <div className="form__group">
                    <label>Nombre de la empresa</label>
                    <input type="text" placeholder="Nombre de la empresa" />
                </div>
                <div className="form__group">
                    <label>Página Web</label>
                    <input type="text" placeholder="Nombre de la empresa" />
                </div>
                <div className="form__group">
                    <label>Descripción de la empresa</label>
                    <textarea type="text" placeholder="Nombre de la empresa" />
                </div>
                <button className="btn">Agregar empresa</button>
            </div>
        </div>
    )
}

export default Company