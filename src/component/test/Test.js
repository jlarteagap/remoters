import React from 'react'
import { Form, Formik } from 'formik'
import {
  InputFields,
  CheckBoxField,
  SelectField
} from '../../utils/form/Fields'

const categories = [
  { value: 'web_developers', text: 'Web Development' },
  { value: 'software_developer', text: 'Software Developers' },
  { value: 'social_media_managers', text: 'Social Media' },
  { value: 'project_managers', text: 'Project Management' },
  { value: 'comercial', text: 'Business Management &amp; Ventas' },
  { value: 'soporte', text: 'Soporte' },
  { value: 'designers', text: 'Diseño web y gráfico' },
  { value: 'devops', text: 'DevOps' },
  { value: 'seo', text: 'SEO - Search Engine Optimization' },
  { value: 'copywriting', text: 'Copywriting' },
  { value: 'seguridad', text: 'Cyber Security' },
  { value: 'qa', text: 'Quality Assurance' },
  { value: 'reclutadores', text: 'RRHH & Reclutamiento' }
]
const contracts = [
  { value: 'Tiempo_Completo', text: 'Tiempo completo' },
  { value: 'Medio_tiempo', text: 'Medio Tiempo' },
  { value: 'Freelance', text: 'Freelance' },
  { value: 'Consultoria', text: 'Consultoria' }
]
export const Test = () => {
  const [isLocation, setIsLocation] = React.useState(false)
  const [isPayment, setIsPayment] = React.useState(false)
  return (
    <Formik
      initialValues={{
        isRemote: false,
        isLocation: false,
        color: ''
      }}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
        <Form>
          <InputFields
            label="Título de la publicación"
            type="text"
            name="position"
          />
          <InputFields
            label="Empresa que representa"
            type="text"
            name="companySimple"
          />
          <InputFields label="Enlace para postular" type="text" name="link" />

          <SelectField
            label="Categoria"
            name="category"
            type="select"
            options={categories}
          />
          <SelectField
            label="Tipo de contrato"
            name="type"
            type="select"
            options={contracts}
          />
          <CheckBoxField
            label="Trabajo remoto?"
            name="isRemote"
            type="checkbox"
          />
          <CheckBoxField
            label="Quieres agregar una ciudad?"
            name="isLocation"
            type="checkbox"
            onClick={() => setIsLocation(!isLocation)}
            checked={isLocation}
          />
          <div
            className={`field is-grouped is-grouped-multiline ${
              isLocation ? '' : 'is-hidden'
            }`}
          >
            <SelectField
              label="País"
              name="country"
              type="select"
              options={contracts}
            />
            <SelectField
              label="Ciudad"
              name="city"
              type="select"
              options={contracts}
            />
          </div>
          <CheckBoxField
            label="Quieres agregar rango salarial?"
            name="isPayment"
            type="checkbox"
            onClick={() => setIsPayment(!isPayment)}
            checked={isPayment}
          />
          <div className={`field has-addons ${isPayment ? '' : 'is-hidden'}`}>
            <SelectField
              label="Tipo de contrato"
              name="type"
              type="select"
              options={contracts}
            />
            <InputFields label="Cantidad" type="text" name="salary" />
          </div>

          <button type="submit" className="button btn">
            Enviar publicación
          </button>
        </Form>
      )}
    </Formik>
  )
}
