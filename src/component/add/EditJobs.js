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
import { tipeMoney, contracts } from './services/utils'
import { Categories } from './categories/Categories'
import { Ubications } from './ubications/Ubications'
import { validate } from './services/validate'
import { initialValuesEdit } from './services/initialValues'

const EditJob = ({ data, refetch }) => {
  console.log(data)
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
        initialValues={initialValuesEdit}
        validationSchema={validate}
        onSubmit={values => {
          console.log(values)
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
                <Categories />
                <SelectField
                  label="Tipo de contrato"
                  name="contract"
                  type="select"
                  options={contracts}
                />
              </div>
              <div className="column">
                <CheckBoxField
                  label="Trabajo remoto?"
                  name="remote"
                  type="checkbox"
                  checked
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
