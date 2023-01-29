import React from 'react'

import './Login.scss'
import { Form } from '../../components'

function Login() {
  return (
    <div id='login'>
      <div className='image-cover'></div>
      <Form btnContent="Đăng nhập" />
    </div>
  )
}

export default Login