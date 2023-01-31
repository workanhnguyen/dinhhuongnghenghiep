import React, { useState, memo } from "react";
import { Link } from "react-router-dom";
import { HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { images } from "../../constants";
import { Header, Footer } from "../../container";
import "../../css/bootstrap.min.css";
import "./HeaderOnly.scss";

const navList = [
  {
    title: "Thông tin",
    route: "/current-user",
  },
  {
    title: "Đăng xuất",
    route: "/",
  },
];

function HeaderOnly({ children }) {
  const [toggle, setToggle] = useState(false);

  return (
    <div id="header-only">
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
                  transition={{ duration: 0.85, ease: "easeOut" }}
                  className="main__hiden-panel"
                >
                  <HiX onClick={() => setToggle(false)} />
                  <ul className="app__navbar-links">
                    {navList.map((item, index) => {
                      return (
                        <li key={index}>
                          <Link
                            data-scroll
                            to={item.route}
                            onClick={() => setToggle(false)}
                          >
                            {item.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </motion.div>
              )}
            </div>
          </div>
        </div>
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default memo(HeaderOnly);
