/* eslint-disable react/prop-types */
import React from 'react'

const Inputs = ({ name, title, value, updateState }) => {
  return (
    <div className="field">
      <div className="control">
        <label className="label">{title}</label>
        <input
          className="input"
          value={value}
          name={name}
          onChange={e => updateState(e)}
          placeholder={title}
          required
        />
      </div>
    </div>
  )
}

export default Inputs
