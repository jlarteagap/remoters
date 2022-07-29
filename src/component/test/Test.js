import React from 'react'
import { Form, Formik } from 'formik'
import { InputFields, CheckBoxField } from '../../utils/form/Fields'

export const Test = () => {
  return (
    <Formik
      initialValues={{
        isRemote: false
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
          <button type="submit" className="button btn mt-2">
            Ingresar
          </button>
        </Form>
      )}
    </Formik>
  )
}
