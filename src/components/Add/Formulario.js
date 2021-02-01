import React from 'react';

const Formulario = () => {
    return(
        <form>
            <label>Nombre de la Empresa</label>
            <input type="text" placeholder="Ej: Acme Corp" name="company" />
            <label>Titulo del puesto vacante</label>
            <input type="text" placeholder="Ej: Product Manager" name="jobTittle" />
            <label>Categoria</label>
            <select>
                <option value="">Elegir...</option>
                <option value="Programacion">Programación</option>
                <option value="Diseño">Diseño</option>
                <option value="Marketing">Marketing</option>
                <option value="Ventas">Ventas</option>
            </select>
            <label>Ciudad</label>
            <select>
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
            <label>Enlace para postular</label>
            <input type="text" placeholder="http://" name="link" />
            <label>Email de contacto</label>
            <input type="text" placeholder="" name="contactEmail" />

            <button type="submit">Enviar publicación</button>

        </form>
    )
}

export default Formulario;