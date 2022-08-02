import React, { useContext } from 'react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { useMutation } from '@apollo/client'
import { ADD_JOB } from '../../Graphql/Mutation'

import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'
import {
  InputFields,
  CheckBoxField,
  SelectField
} from '../../utils/form/Fields'

import { AuthContext } from '../../context/auth'

const cities = [
  { value: 'SANTA CRUZ', text: 'Santa Cruz' },
  { value: 'LA PAZ', text: 'La Paz' },
  { value: 'COCHABAMBA', text: 'Cochabamba' },
  { value: 'TARIJA', text: 'Tarija' },
  { value: 'ORURO', text: 'Oruro' },
  { value: 'POTOSI', text: 'Potosi' },
  { value: 'CHUQUISACA', text: 'Chuquisaca' },
  { value: 'BENI', text: 'Beni' },
  { value: 'PANDO', text: 'Pando' }
]
const countries = [{ value: 'Bolivia', text: 'Bolivia' }]
const tipeMoney = [
  { value: 'Bs', text: 'Bs' },
  { value: '$us', text: '$us' }
]
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
const AddJobs = () => {
  const { user } = useContext(AuthContext)
  const [isLocation, setIsLocation] = React.useState(false)
  const [isPayment, setIsPayment] = React.useState(false)
  const history = useHistory()

  const [newJob] = useMutation(ADD_JOB)

  const validate = Yup.object({
    position: Yup.string().required(
      'Nombre o título de la posición es requerida'
    ),
    companySimple: Yup.string().required('Nombre de la empresa es requerida'),
    link: Yup.string()
      .url('Debe ser una URL válida')
      .required('Necesitamos una URL válida'),
    type: Yup.string().required('Tipo de contrato es requerido'),
    category: Yup.string().required('Categoría es requerida')
  })
  return (
    <div className="box p-5">
      <h3 className="title is-4">Publica una oferta laboral</h3>
      <Formik
        initialValues={{
          position: '',
          companySimple: '',
          link: '',
          category: '',
          city: '',
          remote: false,
          country: 'Bolivia',
          type: '',
          salary: '',
          money: 'Bs.'
        }}
        validationSchema={validate}
        onSubmit={values => {
          newJob({
            variables: {
              input: {
                active: true,
                category: values.category,
                city: values.city,
                country: values.country,
                link: values.link,
                money: values.money,
                position: values.position,
                remote: values.remote,
                salary: values.salary,
                type: values.type,
                companySimple: values.companySimple,
                username: {
                  email: user.email
                }
              }
            }
          }).then(async () => {
            // history.push('/')
            await Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Un nuevo empleo se ha publicado',
              showConfirmButton: false,
              timer: 1500
            }).then(history.push('/dashboard'))
          })
        }}
      >
        {formik => (
          <Form>
            <div className="columns">
              <div className="column is-7">
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
                <InputFields
                  label="Enlace para postular"
                  type="text"
                  name="link"
                />

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
              </div>
              <div className="column">
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
                <div
                  className={`field is-grouped is-grouped-multiline ${
                    isLocation ? '' : 'is-hidden'
                  }`}
                >
                  <SelectField
                    label="País"
                    name="country"
                    type="select"
                    options={countries}
                  />
                  <SelectField
                    label="Ciudad"
                    name="city"
                    type="select"
                    options={cities}
                  />
                </div>
                <CheckBoxField
                  label="Quieres agregar rango salarial?"
                  name="isPayment"
                  type="checkbox"
                  onClick={() => setIsPayment(!isPayment)}
                  checked={isPayment}
                />
                <div
                  className={`field has-addons ${isPayment ? '' : 'is-hidden'}`}
                >
                  <SelectField
                    label="Moneda"
                    name="type"
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
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default AddJobs
