import React, { useState } from 'react';
import './Forms.css'

const Formulario = ({sendDataForm}) => {
    const [data, setData] = useState([])

    const inputData = e => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }


    const sendData = (e) => {
        e.preventDefault()
        let datos = data
        sendDataForm(datos)
    }

    return(

        <div className="content">
            <form className="form" onSubmit={sendData}>
                <div className="form__group">
                    <label>Nombre de la Empresa</label>
                    <input type="text" placeholder="Ej: Acme Corp" name="company" onChange={inputData}/>
                </div>
                <div className="form__group">
                    <label>Titulo del puesto vacante</label>
                    <input type="text" placeholder="Ej: Product Manager" name="jobTittle" onChange={inputData} />
                </div>
                <div className="form__group">
                    <label>Categoria</label>
                    <select name="category" onChange={inputData}>
                        <option value="">Elegir...</option>
                        <option value="Programacion">Programación</option>
                        <option value="Diseño">Diseño</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Ventas">Ventas</option>
                    </select>
                </div>
                <div className="form__group">
                    <label>Ciudad</label>
                    <select name="city" onChange={inputData}>
                        <option value="">Elegir...</option>
                        <option value="Santa Cruz">Santa Cruz</option>
                        <option value="La Paz">La Paz</option>
                        <option value="Cochabamba">Cochabamba</option>
                        <option value="Tarija">Tarija</option>
                        <option value="Oruro">Oruro</option>
                        <option value="Potosi">Potosi</option>
                        <option value="Chuquisaca">Chuquisaca</option>
                        <option value="Beni">Beni</option>
                        <option value="Pando">Pando</option>
                    </select>
                </div>
                <div className="form__group">
                    <label>Enlace para postular</label>
                    <input type="text" placeholder="http://" name="link" onChange={inputData} />
                </div>
                <div className="form__group">
                    <label>Email de contacto</label>
                    <input type="text" placeholder="" name="contactEmail" onChange={inputData} />
                </div>

                <button type="submit" className="btn">Enviar publicación</button>

            </form>
        </div>
    )
}

export default Formulario;