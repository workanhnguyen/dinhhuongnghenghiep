import React, { useState, useRef } from 'react'

import './Form.scss';
import Apis, { endpoints } from '../../configs/Apis';
import { InputWithLabel } from '../../components'
import { images } from '../../constants'
import { Link } from 'react-router-dom';

function Form({ btnContent, type }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState();
  const avatar = useRef();

  const [alertInfo, setAlertInfo] = useState('');
  const [statusCode, setStatusCode] = useState();

  const handleRegister = (e) => {
    e.preventDefault();
    
    let registerUser = async() => {
      if (
        firstName.trim() === ''
        || lastName.trim() === ''
        || username.trim() === ''
        || password.trim() === ''
        || confirmPassword.trim() === ''
        || email.trim() === '')
        setAlertInfo('Không được để trống thông tin!')
      else if (username.includes(' '))
        setAlertInfo('Tên đăng nhập không được chứa khoảng trắng!')
      else if (password.includes(' '))
        setAlertInfo('Mật khẩu không được chứa khoảng trắng!')
      else if (password.length < 8)
        setAlertInfo('Mật khẩu phải có độ dài từ 8 kí tự!')
      else if (password !== confirmPassword)
        setAlertInfo('Mật khẩu không trùng khớp!')
      else {

        const formData = new FormData();
        formData.append("first_name", firstName);
        formData.append("last_name", lastName);
        formData.append("email", email);
        formData.append("username", username);
        formData.append("password", password);
        formData.append("day_of_birth", dob);
        formData.append("avatar", avatar.current.files[0]);

        try {
          let res = await Apis.post(endpoints['register'], formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            }
          });
          setStatusCode(res.status);
          if (res.status)
            setAlertInfo('Thành công!');
        } catch (ex) {
          setStatusCode(ex.response.status)
          if (ex.response.status === 400)
            setAlertInfo('Tên đăng nhập đã tồn tại!');
        }
      }
    }

    // Check validation data input
    registerUser();
  };
  
  return type === 'login' ? (
    <div id='form'>
      <div className='form__img'>
        <img src={images.loginHead} />
      </div>
      <form>
        <InputWithLabel label="Tên đăng nhập" required />
        <InputWithLabel label="Mật khẩu" type='password' required />
        <small className='alert'></small>
        <button type="submit">{btnContent}</button>
      </form>
      <div className='form__switch'>
        <Link to="/register">Chưa có tài khoản? <span className='form__switch-highlight'>Đăng ký ngay</span></Link>
      </div>
    </div>
  ) : (
    <div id='form'>
      <h3 className='form__title'>ĐĂNG KÝ</h3>
      <form onSubmit={handleRegister}>
        <InputWithLabel 
          id='lastName'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          label="Họ và chữ lót" 
          required 
        />
        <InputWithLabel 
          id='firstName'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          label="Tên" 
          required 
        />
        <InputWithLabel
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email" 
          type="email" 
          required 
        />
        <InputWithLabel 
          id='dob'
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          label="Ngày sinh" 
          type="date" 
          required 
        />
        <InputWithLabel
          id='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          label="Tên đăng nhập" 
          required 
        />
        <InputWithLabel 
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Mật khẩu" 
          type="password" 
          required 
        />
        <InputWithLabel 
          id='confirmPassword'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          label="Nhập lại mật khẩu" 
          type="password" 
          required 
        />
        <label htmlFor='avatar'>
          <span>Ảnh đại diện</span><br/>
          <input id='avatar' type='file' ref={avatar} required />
        </label>
        <small className='alert'>{alertInfo}</small>
        <button type="submit">{btnContent}</button>
      </form>
      <div className='form__switch'>
        <Link to="/login">Đã có tài khoản? <span className='form__switch-highlight'>Đăng nhập ngay</span></Link>
      </div>
    </div>
  )
}

export default Form