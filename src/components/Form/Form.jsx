import React from 'react'

import './Form.scss';
import { InputWithLabel } from '../../components'
import { images } from '../../constants'
import { Link } from 'react-router-dom';

function Form({ btnContent, type }) {
  
  return type === 'login' ? (
    <div id='form'>
      <div className='form__img'>
        <img src={images.loginHead} />
      </div>
      <form>
        <InputWithLabel label="Tên đăng nhập" required />
        <InputWithLabel label="Mật khẩu" type='password' required />
        <button type="submit">{btnContent}</button>
      </form>
      <div className='form__switch'>
        <Link to="/register">Chưa có tài khoản? <span className='form__switch-highlight'>Đăng ký ngay</span></Link>
      </div>
    </div>
  ) : (
    <div id='form'>
      <h3 className='form__title'>ĐĂNG KÝ</h3>
      <form>
        <InputWithLabel label="Họ và tên" required />
        <InputWithLabel label="Email" type="email" required />
        <InputWithLabel label="Ngày sinh" type="date" required />
        <InputWithLabel label="Tên đăng nhập" required />
        <InputWithLabel label="Mật khẩu" type="password" required />
        <InputWithLabel label="Nhập lại mật khẩu" type="password" required />
        <button type="submit">{btnContent}</button>
      </form>
      <div className='form__switch'>
        <Link to="/login">Đã có tài khoản? <span className='form__switch-highlight'>Đăng nhập ngay</span></Link>
      </div>
    </div>
  )
}

export default Form