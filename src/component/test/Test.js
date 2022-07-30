import React from 'react'
import { Form, Formik } from 'formik'
import {
  InputFields,
  CheckBoxField,
  SelectField
} from '../../utils/form/Fields'
const cities = ['Santa Cruz', 'Mendoza', 'Córdoba', 'Buenos Aires']
export const Test = () => {
  return (
    <Formik
      initialValues={{
        isRemote: false,
        color: ''
      }}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
        <Form>
          <InputFields
            label="test"
            type="email"
            name="Test"
            placeholder="Test"
          />
          <CheckBoxField
            label="Trabajo remoto?"
            name="isRemote"
            type="checkbox"
          />
          <SelectField
            label="Color"
            name="color"
            type="select"
            cities={cities}
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  )
}
