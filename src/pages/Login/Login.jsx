import React, { memo } from 'react'
import { useSelector } from 'react-redux';

import './Login.scss'
import { Form } from '../../components'

function Login() {

  return (
    <div id='login'>
      <div className='image-cover'></div>
      <Form btnContent="Đăng nhập" type="login" />
    </div>
  )
}

export default memo(Login)