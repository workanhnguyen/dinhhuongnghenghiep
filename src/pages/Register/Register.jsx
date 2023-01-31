import React, { memo } from 'react'

import './Register.scss'
import { Form } from '../../components'

function Register() {
  return (
    <div id='register'>
      <div className='image-cover'></div>
      <Form btnContent="Đăng ký" type="register" />
    </div>
  )
}

export default memo(Register)