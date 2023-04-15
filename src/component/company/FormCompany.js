import React from 'react'
import { InputFields, TextareaField } from '@utils/form/Fields'
import UploadLogo from './UploadLogo'

export const FormCompany = () => {
  return (
    <>
      <UploadLogo />
      <InputFields label="Nombre de la empresa" type="text" name="name" />
      <InputFields label="Página web" type="text" name="site" />
      <InputFields label="Teléfono" type="text" name="phone" />
      <InputFields label="Actividad Empresarial" type="text" name="activity" />
      <TextareaField label="Agregar descripción" name="description" />
      <button type="submit" className="button btn mt-3">
        Agregar empresa
      </button>
    </>
  )
}
