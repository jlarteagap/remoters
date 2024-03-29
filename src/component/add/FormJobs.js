import React from 'react'
import {
  InputFields,
  CheckBoxField,
  SelectField
} from '../../utils/form/Fields'
import Editor from '../editor/Editor'
import { CompaniesAddJobs } from './companies/CompaniesAddJobs'
import { Categories } from './categories/Categories'
import { Ubications } from './ubications/Ubications'
import { tipeMoney, contracts } from './utils/utils'

import PropTypes from 'prop-types'

export const FormJobs = ({ location, payment, getEditor, editDesc }) => {
  const [isLocation, setIsLocation] = React.useState(location || false)
  const [isPayment, setIsPayment] = React.useState(payment || false)

  return (
    <>
      <div className="columns">
        <div className="column is-7">
          <InputFields
            label="Título de la publicación"
            type="text"
            name="title"
          />
          <CompaniesAddJobs />
          <InputFields label="Enlace para postular" type="text" name="link" />
          <Categories />
          <SelectField
            label="Tipo de contrato"
            name="contract"
            type="select"
            options={contracts}
          />
          <Editor getEditor={getEditor} editDesc={editDesc} />
        </div>
        <div className="column">
          <CheckBoxField
            label="Busqueda activa"
            name="active"
            type="checkbox"
          />
          <CheckBoxField
            label="Trabajo remoto?"
            name="remote"
            type="checkbox"
          />
          <CheckBoxField
            label="Quieres agregar una ciudad?"
            name="isLocation"
            type="checkbox"
            onClick={() => setIsLocation(!isLocation)}
            checked={isLocation}
          />
          <Ubications isLocation={isLocation} />
          <CheckBoxField
            label="Quieres agregar rango salarial?"
            name="isPayment"
            type="checkbox"
            onClick={() => setIsPayment(!isPayment)}
            checked={isPayment}
          />
          <div className={`field has-addons ${isPayment ? '' : 'is-hidden'}`}>
            <SelectField
              label="Moneda"
              name="currency"
              type="select"
              options={tipeMoney}
            />
            <InputFields label="Cantidad" type="text" name="salary" />
          </div>
        </div>
      </div>
      <button type="submit" className="button btn">
        Enviar publicación
      </button>
    </>
  )
}

FormJobs.propTypes = {
  location: PropTypes.string,
  payment: PropTypes.string
}
