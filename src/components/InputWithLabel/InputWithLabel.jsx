import React from 'react'

import './InputWithLabel.scss'

function InputWithLabel({ label, type, required }) {
  return (
    <div id='input-with-label'>
        <label>{label}</label>
        <input 
          type={
            type === 'password' ? 'password' : (
              type === 'email' ? 'email' : (
                type === 'date' ? 'date' : 'text'
              )
            )
          }
          required={required}
        />
    </div>
  )
}

export default InputWithLabel