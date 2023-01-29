import React from 'react'

import './InputWithLabel.scss'

function InputWithLabel({ label, password }) {
  return (
    <div id='input-with-label'>
        <label>{label}</label>
        <input type={password ? "password" : "text"} />
    </div>
  )
}

export default InputWithLabel