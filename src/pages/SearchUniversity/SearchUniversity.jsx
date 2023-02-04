import React, { useState, memo, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiX } from 'react-icons/hi';
import { BiSearchAlt } from 'react-icons/bi';
import { motion } from 'framer-motion';
import cookies from 'react-cookies';
import { useDispatch } from "react-redux";

import { images, variables } from "../../constants";
import { Back, Footer, Header } from "../../container";
import "../../css/bootstrap.min.css";
import "./SearchUniversity.scss";
import { logoutUser } from "../../ActionCreators/UserCreators";

const navList = [
    {
        title: 'Thông tin',
        route: '/current-user'
    },
    {
        title: 'Đăng xuất',
        route: '/'
    }
];

const universities = [
  {
    name: 'Trường Đại học Mở TPHCM',
    image: images.logoOU,
    link: 'https://tuyensinh.ou.edu.vn/'
  },
  {
    name: 'Trường Đại học Bách khoa TPHCM',
    image: images.logoBK,
    link: 'http://tuyensinh.hcmut.edu.vn/'
  },
  {
    name: 'Trường Đại học Kinh tế - Luật TPHCM',
    image: images.logoUEL,
    link: 'https://tuyensinh.uel.edu.vn/'
  },
  {
    name: 'Trường Đại học Kinh tế TPHCM',
    image: images.logoUEH,
    link: 'https://tuyensinh.ou.edu.vn'
  },
  {
    name: 'Trường Đại học Ngoại thương TPHCM',
    image: images.logoFTU,
    link: 'https://tuyensinh.ou.edu.vn'
  },
  {
    name: 'Trường Đại học Sư phạm Kỹ thuật TPHCM',
    image: images.logoUTE,
    link: 'https://tuyensinh.ou.edu.vn'
  },
  {
    name: 'Trường Đại học Công nghiệp TPHCM',
    image: images.logoIUH,
    link: 'https://tuyensinh.ou.edu.vn'
  },
  {
    name: 'Trường Đại học CNTT TPHCM',
    image: images.logoUIT,
    link: 'https://tuyensinh.ou.edu.vn'
  },
  {
    name: 'Trường Đại học KHXH&NV TPHCM',
    image: images.logoUSSH,
    link: 'https://tuyensinh.ou.edu.vn'
  },
];

function SearchUniversity() {

  const user = cookies.load('user');
  const navigate = useNavigate();
  const dispatch = useDispatch();

    const [toggle, setToggle] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchUniList, setSearchUniList] = useState([]);

    useEffect(() => {
      setSearchUniList(universities.filter((uni) => uni.name.toLowerCase().includes(searchTerm.toLowerCase())));
    }, [searchTerm]);

    const handleLogout = (e) => {
      e.preventDefault();
  
      setToggle(false);
      cookies.remove("access_token");
      cookies.remove("user");
      dispatch(logoutUser())
      navigate("/");
    }

  if (user === undefined)
    return (<Back />);
  else
    return (
      <div id='search-university'>
          <div className="container">
              <div className="main__header">
                  <Link to="/" className="main__header-img">
                      <img src={images.logo} />
                  </Link>
                  <div className="search-bar">
                    <label>
                      <input 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} 
                        type='text' 
                        placeholder="Nhập tên trường muốn tìm..." />
                      <BiSearchAlt className="icon"/>
                    </label>
                  </div>
                  <div className="main__header-user-info">
                      <span>{`${user.last_name} ${user.first_name}`}</span>
                      <div className="app__navbar-menu">
                          <img src={user.avatar !== null ? `${variables.BASE_DIR_STATIC}${user.avatar}` : images.defaultUser} onClick={() => setToggle(true)} />
                          {toggle && (
                              <motion.div
                                  whileInView={{ x: [300, 0] }}
                                  transition={{ duration: 0.85, ease: 'easeOut' }}
                                  className='main__hiden-panel'
                              >
                                  <HiX onClick={() => setToggle(false)} />
                                  <ul className="app__navbar-links">
                                  {navList.map((item, index) => { 
                                      if (index === 0)
                                        return (<li key={index}>
                                          <Link 
                                              data-scroll 
                                              to={item.route}
                                              onClick={() => setToggle(false)}
                                          >
                                              {item.title}
                                          </Link>
                                        </li>);
                                      else
                                        return (<li key={index}>
                                            <Link 
                                                data-scroll 
                                                to={item.route}
                                                onClick={handleLogout}
                                            >
                                                {item.title}
                                            </Link>
                                        </li>);
                                  })}
                                  </ul>
                              </motion.div>
                          )}
                      </div>
                  </div>
              </div>
              <div className="row no-gutters justify-content-start main__content">
                  {searchUniList.map((item, index) => (
                    <div key={index} className="col-6 col-sm-6 col-lg-3 col-xl-3">
                      <a className="item" href={item.link}>
                        <img src={item.image} alt={item.name} />
                        <p>{item.name}</p>
                      </a>
                    </div>
                  ))}
              </div>
          </div>
          <Footer />
      </div>
    )
}

export default memo(SearchUniversity)