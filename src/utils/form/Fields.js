/* eslint-disable react/prop-types */
import React from 'react'
import { ErrorMessage, useField } from 'formik'
import FormStyle from '@public/css/Form.module.css'

export const InputFields = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div className="field">
      <div className={`control ${FormStyle.form__style}`}>
        <input
          className={`input ${meta.touched && meta.error && 'is-danger'}`}
          {...field}
          {...props}
        />
        <label className="label">{label}</label>
        <ErrorMessage
          component="div"
          name={field.name}
          className="help is-danger"
        />
      </div>
    </div>
  )
}

export const CheckBoxField = ({ label, ...props }) => {
  const [field] = useField(props)

  return (
    <div className="is-flex is-align-items-center is-justify-content-space-between mb-2">
      <div className="has-text-weight-semibold">{label}</div>
      <div className={FormStyle.switchButton}>
        <input
          className={FormStyle.switchButtonCheckbox}
          {...field}
          {...props}
        />
        <label className={FormStyle.switchButtonLabel} htmlFor="">
          <span className={FormStyle.switchButtonLabelSpan}>No</span>
        </label>
      </div>
    </div>
  )
}

export const SelectField = ({ label, options, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <div className={`field ${FormStyle.form__style}`}>
      <div className="select is-fullwidth">
        <select
          {...field}
          {...props}
          className={`${meta.touched && meta.error && 'is-danger'}`}
        >
          {options.map((option, index) => {
            return (
              <option value={option.value} label={option.name} key={index}>
                {option.text}
              </option>
            )
          })}
        </select>
        <label className="label">{label}</label>
      </div>

      <ErrorMessage
        component="div"
        name={field.name}
        className="help is-danger"
      />
    </div>
  )
}

export const TextareaField = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div className="field">
      <div className={`control ${FormStyle.form__style}`}>
        <textarea
          className={`textarea ${meta.touched && meta.error && 'is-danger'}`}
          placeholder="Agregar descripcion"
          {...field}
          {...props}
        ></textarea>
        <label className="label">{label}</label>
        <ErrorMessage
          component="div"
          name={field.name}
          className="help is-danger"
        />
      </div>
    </div>
  )
}
