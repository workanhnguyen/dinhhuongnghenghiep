import React, { useState, memo } from "react";
import { Link } from "react-router-dom";
import { HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from "../../constants";
import { Header } from "../../container";
import "../../css/bootstrap.min.css";
import "./Main.scss";

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

const services = [
    {
      title: 'Khảo sát định hướng',
      image: images.serviceIcon1,
      content: 'Thực hiện bài khảo sát và nhận ngay kết quả về lĩnh vực ngành nghề phù hợp với bản thân.',
      route: '/survey'
    },
    {
      title: 'Tìm hiểu trường đại học',
      image: images.serviceIcon2,
      content: 'Tìm thông tin chính thống về các trường đại học, tìm ra ngôi trường yêu thích.',
      route: '/search-university'
    },
];

function Main() {

    const [toggle, setToggle] = useState(false);

  return (
    <div id='main'>
        <div className="container">
            <div className="main__header">
                <Link to="/" className="main__header-img">
                    <img src={images.logo} />
                </Link>
                <div className="main__header-user-info">
                    <span>Changed info</span>
                    <div className="app__navbar-menu">
                        <img src={images.logoOU} onClick={() => setToggle(true)} />
                        {toggle && (
                            <motion.div
                                whileInView={{ x: [300, 0] }}
                                transition={{ duration: 0.85, ease: 'easeOut' }}
                                className='main__hiden-panel'
                            >
                                <HiX onClick={() => setToggle(false)} />
                                <ul className="app__navbar-links">
                                {navList.map((item, index) => { 
                                    return (<li key={index}>
                                            <Link 
                                                data-scroll 
                                                to={item.route}
                                                onClick={() => setToggle(false)}
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
            <div className="row justify-content-around align-items-center main__choices">
                {services.map((item, index) => (
                        <div key={index} className="col-12 col-sm-6 col-lg-6">
                            <div className="item">
                                <img src={item.image} alt=""/>
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                                <div>
                                    <Link to={item.route}>Truy cập</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default memo(Main)