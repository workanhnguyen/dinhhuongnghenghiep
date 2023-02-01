import React from 'react'

import './InputWithLabel.scss'

function InputWithLabel({ label, type, required, accept }) {
  return (
    <div id='input-with-label'>
        <label>{label}</label>
        <input 
          type={
            type === 'password' ? 'password' : (
              type === 'email' ? 'email' : (
                type === 'date' ? 'date' : (
                  type === 'file'? 'file' : 'text'
                )
              )
            )
          }
          required={required}
          accept={accept}
        />
    </div>
  )
}

export default InputWithLabel