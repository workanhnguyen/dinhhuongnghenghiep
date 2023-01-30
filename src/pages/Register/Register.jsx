import React from 'react'

import './Register.scss'
import { Form } from '../../components'

function Login() {
  return (
    <div id='register'>
      <div className='image-cover'></div>
      <Form btnContent="Đăng ký" type="register" />
    </div>
  )
}

export default Login