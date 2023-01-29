import React, { useState } from "react";
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from "../../constants";
import "../../css/bootstrap.min.css";
import "./Header.scss";

const navList = [
  {
    title: 'Trang chủ',
    href: '#home'
  },
  {
    title: 'Về chúng tôi',
    href: '#about-us'
  },
  {
    title: 'Đại học',
    href: '#university'
  },
  {
    title: 'Blog',
    href: '#blog'
  },
  {
    title: 'Phản hồi',
    href: '#feedback'
  },
];

function Header() {

  const [toggle, setToggle] = useState(false);

  return (
    <header id="home">
      <div className="container">
        <nav class="navbar navbar-expand-lg navbar-light ">
          {/* <!-- Change Logo Img Here --> */}
          <a class="navbar-brand" href="#">
            <img src={images.logo} alt="logo" />
          </a>
          {/* <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div class="interactive-menu-button">
              <a href="#">
                <span>Menu</span>
              </a>
            </div>
          </button> */}

          <div className="app__navbar-menu">
            <HiMenuAlt4 onClick={() => setToggle(true)} />
            {toggle && (
              <motion.div
                whileInView={{ x: [300, 0] }}
                transition={{ duration: 0.85, ease: 'easeOut' }}
              >
                <HiX onClick={() => setToggle(false)} />
                <ul className="app__navbar-links">
                  {navList.map((item, index) => {
                    if (index === 0) 
                      return (<li key={index}>
                          <a 
                            data-scroll 
                            href={item.href}
                            onClick={() => setToggle(false)}
                          >
                            {item.title}
                          </a>
                        </li>);
                    else 
                      return (<li key={index}>
                          <a 
                            data-scroll 
                            href={item.href}
                            onClick={() => setToggle(false)}
                          >
                            {item.title}
                          </a>
                        </li>)
                  })}
                </ul>
              </motion.div>
            )}
          </div>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <!-- Nav Link --> */}
            <ul class="navbar-nav mr-auto">
              {navList.map((item, index) => {
                if (index === 0) 
                  return (<li className="nav-item active">
                    <a className="nav-link" data-scroll href={item.href}>{item.title}</a>
                  </li>);
                else 
                  return (<li className="nav-item">
                    <a className="nav-link" data-scroll href={item.href}>{item.title}</a>
                  </li>)
              })}
            </ul>
            <form
              data-scroll
              href="#feedback"
              class="contact-btn form-inline my-2 my-lg-0"
            >
              {/* <!-- Sign in Button --> */}
              <button>Đăng nhập</button>
            </form>
          </div>
        </nav>
      </div>
      {/* <!-- HERO SECTION -->     */}
      <div className="container-fluid hero">
        <img src={images.hero} alt="hero-img" />
        <div className="container">
          {/* <!-- Hero Title --> */}
          <h1 className="hero-title">
            Hệ thống hỗ trợ định hướng
            <br />
            nghề nghiệp cho học sinh
          </h1>
          {/* <!-- Hero Title Info --> */}
          <p className="hero-content">
            Chúng tôi giúp bạn tìm ra lĩnh vực mà bạn đam mê, từ đó giúp xác định
            ngành nghề phù hợp với bạn trong tương lai. Đồng thời bạn có thể tìm kiếm
            ngôi trường đại học mơ ước tại đây.
          </p>
          <div className="hero-btns">
            {/* <!-- Hero Btn First --> */}
            <a data-scroll href="#about-us">
              Đăng ký
            </a>
            {/* <!-- Hero Btn Second --> */}
            <a data-scroll href="#feedback">
              Đăng nhập
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
