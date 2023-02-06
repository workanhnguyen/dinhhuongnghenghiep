import React, { useState, memo, useEffect, useReducer, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import cookies from 'react-cookies';

import { images } from "../../constants";
import { InputWithLabel } from '../../components'
import { Back } from "../../container";
import { HeaderOnly, FooterOnly } from "../../Layout";
import "../../css/bootstrap.min.css";
import "./User.scss";
import { variables } from '../../constants'
import { useDispatch } from "react-redux";
import { logoutUser } from "../../ActionCreators/UserCreators";
import Apis, { endpoints } from "../../configs/Apis";

const USER_EDIT = 'USER_EDIT';
const USER_SURVEY = 'USER_SURVEY';
//   {
//       "id": 18,
//       "result": "Realistic - Người thực tế",
//       "participant": 1,
//       "created_date": "2023-01-28T04:51:24.571719Z"
//   },
//   {
//       "id": 19,
//       "result": "hihi haha",
//       "participant": 1,
//       "created_date": "2023-01-28T04:51:39.233930Z"
//   },
//   {
//       "id": 20,
//       "result": "hoho",
//       "participant": 1,
//       "created_date": "2023-01-28T05:23:00.328016Z"
//   },
//   {
//       "id": 21,
//       "result": "hakdhasjds",
//       "participant": 1,
//       "created_date": "2023-01-29T13:12:43.744376Z"
//   },
//   {
//     "id": 18,
//     "result": "Realistic - Người thực tế",
//     "participant": 1,
//     "created_date": "2023-01-28T04:51:24.571719Z"
// },
// {
//     "id": 19,
//     "result": "hihi haha",
//     "participant": 1,
//     "created_date": "2023-01-28T04:51:39.233930Z"
// },
// {
//     "id": 20,
//     "result": "hoho",
//     "participant": 1,
//     "created_date": "2023-01-28T05:23:00.328016Z"
// },
// {
//     "id": 21,
//     "result": "hakdhasjds",
//     "participant": 1,
//     "created_date": "2023-01-29T13:12:43.744376Z"
// }
// ];

function User() {

  const user = cookies.load('user');

  const [surveys, setSurveys] = useState([]);
  const [toggleEdit, setToggleEdit] = useState(USER_SURVEY);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    
    const getSurveyData = async() => {
      try {
        let res = await Apis.get(endpoints['get-survey'], {
          headers: {
            "Authorization": `Bearer ${cookies.load('access_token')}`
          }
        });
        setSurveys(res.data);
        document.getElementById('survey__result').innerHTML = surveys.map((item, index) => (
          `<li key=${index}>
            <h5>${item.created_date.toString().slice(0, 10)}</h5>
            ${item.result}
          </li>`
        )).join('');
      } catch (err) {
        console.log(err);
      }
    };

    getSurveyData();
  }, [surveys, toggleEdit])

  const handleEdit = (e) => {
    e.preventDefault();
  }

  const handleLogout = (e) => {
    e.preventDefault();

    cookies.remove("access_token");
    cookies.remove("user");
    dispatch(logoutUser())
    navigate("/");
  }
  
  if (user === undefined)
    return (<Back />);
  else
    switch(toggleEdit) {
      case USER_SURVEY:
        return (
          <div id="user">
            <div className="container">
              <div className="row no-gutters justify-content-center align-items-center user">
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4">
                  <div className="user__info">
                    <div className="user__info-image">
                      <img src={user.avatar === null ? images.defaultUser : `${variables.BASE_DIR_STATIC}${user.avatar}`} alt="avatar" />
                    </div>
                    <div className="user__info-detail">
                      <p>
                        <span className="title">Họ và tên: </span>
                        <span className="content">{`${user.last_name} ${user.first_name}`}</span>
                      </p>
                      <p>
                        <span className="title">Ngày sinh: </span>
                        <span className="content">{`${user.day_of_birth}`}</span>
                      </p>
                      <p>
                        <span className="title">Email: </span>
                        <span className="content">{`${user.email}`}</span>
                      </p>
                    </div>
                    <div className="user__info-controller">
                      <button
                        onClick={() => setToggleEdit(USER_EDIT)}
                        className="btn-edit col-12 col-sm-5 col-md-5 col-lg-12"
                      >
                        Chỉnh sửa
                      </button>
                      <Link 
                        to="/" 
                        onClick={handleLogout} 
                        className="btn-log-out col-12 col-sm-5 col-md-5 col-lg-12"
                      >
                        Đăng xuất
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-8">
                  <div className="user__show">
                    <h3>LỊCH SỬ KHẢO SÁT:</h3>
                    <ul id="survey__result" className="survey__list scroll"></ul>
                  </div>
                </div>
              </div>
            </div>
            <FooterOnly />
          </div>
        );
      case USER_EDIT:
        return (
          <div id="user">
            <div className="container">
              <div className="row no-gutters justify-content-center align-items-center user">
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4">
                  <div className="user__info">
                    <div className="user__info-image">
                    <img src={user.avatar === null ? images.defaultUser : `${variables.BASE_DIR_STATIC}${user.avatar}`} alt="avatar" />
                    </div>
                    <div className="user__info-detail">
                      <p>
                        <span className="title">Họ và tên: </span>
                        <span className="content">{`${user.last_name} ${user.first_name}`}</span>
                      </p>
                      <p>
                        <span className="title">Ngày sinh: </span>
                        <span className="content">{user.day_of_birth}</span>
                      </p>
                      <p>
                        <span className="title">Email: </span>
                        <span className="content">{user.email}</span>
                      </p>
                    </div>
                    <div className="user__info-controller">
                      <Link 
                        to="/" 
                        onClick={() => console.log('log out')} 
                        className="btn-log-out col-12 col-sm-5 col-md-5 col-lg-12"
                      >
                        Đăng xuất
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-8">
                  <div className="user__show">
                    <form onSubmit={handleEdit}>
                      <div>
                        <InputWithLabel label="Họ và chữ lót: " required />
                        <InputWithLabel label="Tên: " required />
                      </div>
                      <div>
                        <InputWithLabel label="Ngày sinh: " type="date" required />
                        <InputWithLabel label="Email: " type="email" required />
                      </div>
                      <div>  
                        <InputWithLabel label="Ảnh đại diện: " type="file" accept=".png,.jpg" />
                      </div>
                      <div className="user__info-controller">
                        <button 
                          className="btn-submit"
                          type="submit"
                        >
                          Lưu thông tin
                        </button>
                        <button 
                          className="btn-back"
                          onClick={() => setToggleEdit(USER_SURVEY)}
                        >
                          Trở lại
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <FooterOnly />
          </div>
        )
    }
}

export default memo(User)