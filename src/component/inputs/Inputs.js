/* eslint-disable react/prop-types */
import React from 'react'
import './Form.css'

const Inputs = ({
  name,
  title,
  value,
  updateState,
  type,
  required,
  defaultValue
}) => {
  return (
    <div className="field">
      <div className="control form__style">
        <input
          className="input"
          value={value}
          name={name}
          onChange={e => updateState(e)}
          type={type}
          required={required}
          defaultValue={defaultValue}
        />
        <label className="label">{title}</label>
      </div>
    </div>
  )
}

export default Inputs
