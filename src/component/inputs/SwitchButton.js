/* eslint-disable react/prop-types */
import React from 'react'
import './Form.css'

export const SwitchButton = ({ checked, onChange, title }) => {
  return (
    <div className="is-flex is-align-items-center is-justify-content-space-between mb-2">
      <div className="has-text-weight-semibold">{title}</div>
      <div className="switch-button">
        <input
          className="switch-button-checkbox"
          type="checkbox"
          checked={checked}
          onChange={onChange}
        ></input>
        <label className="switch-button-label" htmlFor="">
          <span className="switch-button-label-span">No</span>
        </label>
      </div>
    </div>
  )
}
