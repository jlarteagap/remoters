import React from 'react'
import {
  InputFields,
  CheckBoxField,
  SelectField
} from '../../utils/form/Fields'
import { Categories } from './categories/Categories'
import { Ubications } from './ubications/Ubications'
import { tipeMoney, contracts } from './utils/utils'
import PropTypes from 'prop-types'

export const FormJobs = ({ defaultValues }) => {
  // eslint-disable-next-line prefer-const
  let remoteStatus = defaultValues.remote
  const [isRemote, setIsRemote] = React.useState(remoteStatus)
  const [isLocation, setIsLocation] = React.useState(false)
  const [isPayment, setIsPayment] = React.useState(false)
  return (
    <>
      <div className="columns">
        <div className="column is-7">
          <InputFields
            label="Título de la publicación"
            type="text"
            name="title"
            defaultValue={defaultValues ? defaultValues.content.title : ''}
          />
          <InputFields
            label="Empresa que representa"
            type="text"
            name="company"
            defaultValue={defaultValues ? defaultValues.company.name : ''}
          />
          <InputFields
            label="Enlace para postular"
            type="text"
            name="link"
            defaultValue={defaultValues ? defaultValues.link : ''}
          />
          <Categories defaultValues={defaultValues.category} />
          <SelectField
            label="Tipo de contrato"
            name="type"
            type="select"
            options={contracts}
            defaultValue={defaultValues ? defaultValues.content.contract : ''}
          />
        </div>
        <div className="column">
          <CheckBoxField
            label="Trabajo remoto?"
            name="remote"
            type="checkbox"
            onClick={() => setIsRemote(!isRemote)}
            checked={isRemote}
          />
          <CheckBoxField
            label="Quieres agregar una ciudad?"
            name="isLocation"
            type="checkbox"
            onClick={() => setIsLocation(!isLocation)}
            checked={isLocation}
          />
          <Ubications
            isLocation={isLocation}
            defaultValues={defaultValues.ubication}
          />
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
              defaultValue={defaultValues ? defaultValues.content.currency : ''}
            />
            <InputFields
              label="Cantidad"
              type="text"
              name="salary"
              defaultValue={defaultValues ? defaultValues.content.salary : ''}
            />
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
  defaultValues: PropTypes.object
}
