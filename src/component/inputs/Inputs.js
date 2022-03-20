/* eslint-disable react/prop-types */
import React from 'react'
import './Form.css'

const Inputs = ({ name, title, value, updateState, type }) => {
  return (
    <div className="field">
      <div className="control form__style">
        <input
          className="input"
          value={value}
          name={name}
          onChange={e => updateState(e)}
          required
          type={type}
        />
        <label className="label">{title}</label>
      </div>
    </div>
  )
}

export default Inputs
