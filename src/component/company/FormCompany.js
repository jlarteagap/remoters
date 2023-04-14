import React from 'react'
import { InputFields } from '@utils/form/Fields'
import Editor from '../editor/Editor'

export const FormCompany = ({ getEditor, editDesc }) => {
  return (
    <>
    <InputFields label="Nombre de la empresa" type="text" name="name" />
    <InputFields label="Página web" type="text" name="site" />
    <InputFields label="Teléfono" type="text" name="phone" />
    <InputFields label="Actividad Empresarial" type="text" name="activity" />
    <Editor getEditor={getEditor} editDesc={editDesc} />
    <button type='submit' className="button btn mt-3">Agregar empresa</button>
    </>

  )
}
