import React, { useContext, useState } from 'react'
import { useMutation } from '@apollo/client'
import { UPDATE_JOB } from '../../Graphql/Mutation'
import { GET_JOBS } from '../../Graphql/Query'
import { AuthContext } from '../../context/auth'
import { Form, Formik } from 'formik'

import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'

import {
  InputFields,
  SelectField,
  CheckBoxField
} from '../../utils/form/Fields'

const categories = [
  { value: 'web_developers', text: 'Web Development' },
  { value: 'software_developer', text: 'Software Developers' },
  { value: 'social_media_managers', text: 'Social Media' },
  { value: 'project_managers', text: 'Project Management' },
  { value: 'comercial', text: 'Business Management & Ventas' },
  { value: 'soporte', text: 'Soporte' },
  { value: 'designers', text: 'Diseño web y gráfico' },
  { value: 'devops', text: 'DevOps' },
  { value: 'seo', text: 'SEO - Search Engine Optimization' },
  { value: 'copywriting', text: 'Copywriting' },
  { value: 'seguridad', text: 'Cyber Security' },
  { value: 'qa', text: 'Quality Assurance' },
  { value: 'reclutadores', text: 'RRHH & Reclutamiento' }
]
const tipeMoney = [
  { value: 'Bs.', text: 'Bs.' },
  { value: '$us.', text: '$us.' }
]
const contracts = [
  { value: 'Tiempo_completo', text: 'Tiempo completo' },
  { value: 'Medio_tiempo', text: 'Medio Tiempo' },
  { value: 'Freelance', text: 'Freelance' },
  { value: 'Consultoria', text: 'Consultoria' }
]
const cities = [
  { value: 'SANTA_CRUZ', text: 'Santa Cruz' },
  { value: 'LA_PAZ', text: 'La Paz' },
  { value: 'COCHABAMBA', text: 'Cochabamba' },
  { value: 'TARIJA', text: 'Tarija' },
  { value: 'ORURO', text: 'Oruro' },
  { value: 'POTOSI', text: 'Potosi' },
  { value: 'CHUQUISACA', text: 'Chuquisaca' },
  { value: 'BENI', text: 'Beni' },
  { value: 'PANDO', text: 'Pando' }
]
const countries = [{ value: 'Bolivia', text: 'Bolivia' }]
const EditJob = ({ data, refetch }) => {
  const [jobs] = useState(data)
  const [isRemote] = useState(data.remote)

  const [isLocation, setIsLocation] = React.useState(jobs.city)
  const [isPayment, setIsPayment] = useState(jobs.money)

  const { user } = useContext(AuthContext)

  const [updateJob] = useMutation(UPDATE_JOB, {
    refetchQueries: [{ query: GET_JOBS }]
  })
  const history = useHistory()

  return (
    <div className="box p-5">
      <h3 className="title is-4">Editar publicación</h3>
      <Formik
        initialValues={{
          id: jobs.id,
          active: false,
          category: jobs.category,
          city: jobs.city,
          country: jobs.country,
          link: jobs.link,
          money: jobs.money,
          position: jobs.position,
          remote: isRemote,
          salary: jobs.salary,
          type: jobs.type,
          companySimple: jobs.companySimple
        }}
        onSubmit={values => {
          updateJob({
            variables: {
              input: {
                id: values.id,
                active: false,
                category: values.category,
                city: values.city,
                country: values.country,
                link: values.link,
                money: values.money,
                position: values.position,
                remote: isRemote,
                salary: values.salary,
                type: values.type,
                companySimple: values.companySimple,
                username: {
                  email: user.email
                }
              }
            }
          }).then(
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Publicación actualizada correctamente.',
              showConfirmButton: false,
              timer: 1500
            }).then(
              refetch().then(() => {
                history.push('/dashboard')
              })
            )
          )
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
                  defaultValue={jobs.position}
                />
                <InputFields
                  label="Empresa que representa"
                  type="text"
                  name="companySimple"
                  companieJob={jobs.companySimple}
                />
                <InputFields
                  label="Enlace para postular"
                  type="text"
                  name="link"
                  defaultValue={jobs.link}
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
                  checked={isRemote}
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
                    name="money"
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

EditJob.propTypes = {
  data: PropTypes.object,
  refetch: PropTypes.func
}
export default EditJob
