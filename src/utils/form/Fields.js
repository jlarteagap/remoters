/* eslint-disable react/prop-types */
import React from 'react'
import { ErrorMessage, useField } from 'formik'

export const InputFields = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div>
        <input
          className={`input ${meta.touched && meta.error && 'is-danger'}`}
          {...field}
          {...props}
        />
      </div>
      <ErrorMessage
        component="div"
        name={field.name}
        className="help is-danger"
      />
    </div>
  )
}
