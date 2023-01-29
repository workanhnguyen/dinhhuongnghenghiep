import React from 'react'

import './Form.scss';
import { InputWithLabel } from '../../components'
import { images } from '../../constants'
import { Link } from 'react-router-dom';

function Form({ btnContent }) {
  return (
    <div id='form'>
      <div className='form__img'>
        <img src={images.loginHead} />
      </div>
      <form>
        <InputWithLabel label="Tên đăng nhập"/>
        <InputWithLabel label="Mật khẩu" password/>
        <button type="submit">{btnContent}</button>
      </form>
      <div className='form__switch'>
        <Link to="/register">Chưa có tài khoản? <span className='form__switch-highlight'>Đăng ký ngay</span></Link>
      </div>
    </div>
  )
}

export default Form