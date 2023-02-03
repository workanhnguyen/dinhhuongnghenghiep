import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import cookies from 'react-cookies';
import { useNavigate } from 'react-router-dom';

import './Login.scss'
import { Form } from '../../components'

function Login() {

  const navigate = useNavigate();

  if (cookies.load("user") !== undefined)
    return <h1>Page not found</h1>
  else
    return (
    <div id='login'>
      <div className='image-cover'></div>
      <Form btnContent="Đăng nhập" type="login" />
    </div>
  )
}

export default memo(Login)