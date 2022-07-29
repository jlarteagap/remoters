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

export const CheckBoxField = ({ label, ...props }) => {
  const [field] = useField(props)
  console.log(field)
  return (
    <div className="is-flex is-align-items-center is-justify-content-space-between mb-2">
      <div className="has-text-weight-semibold">{label}</div>
      <div className="switch-button">
        <input className="switch-button-checkbox" {...field} {...props}></input>
        <label className="switch-button-label" htmlFor="">
          <span className="switch-button-label-span">No</span>
        </label>
      </div>
    </div>
  )
}
