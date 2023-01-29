import React from "react";

import { images } from "../../constants";
import "../../css/bootstrap.min.css";
import "./Footer.scss";

function Footer() {
  return (
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h5>SCOSS</h5>
            <h3>HCMC - OU</h3>
            <ul class="contact-nav">
              <li>
                <a data-scroll href="#home">
                  Trang chủ
                </a>
              </li>
              <li>
                <a data-scroll href="#about-us">
                  Về chúng tôi
                </a>
              </li>
              <li>
                <a data-scroll href="#university">
                  Đại học
                </a>
              </li>
              <li>
                <a data-scroll href="#blog">
                  Blog
                </a>
              </li>
              <li>
                <a data-scroll href="#contact-us">
                  Phản hồi
                </a>
              </li>
            </ul>
            <h6>© 2023 - SCOSS, Bản quyền</h6>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
