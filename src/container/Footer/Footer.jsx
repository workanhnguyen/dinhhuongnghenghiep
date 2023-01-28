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
            <h5>DOOB</h5>
            <h3>CREATIVITY ABOVE</h3>
            <ul class="contact-nav">
              <li>
                <a data-scroll href="#home">
                  Home.
                </a>
              </li>
              <li>
                <a data-scroll href="#about-us">
                  About Us.
                </a>
              </li>
              <li>
                <a data-scroll href="#portfolio">
                  Portfolio.
                </a>
              </li>
              <li>
                <a data-scroll href="#blog">
                  Blog.
                </a>
              </li>
              <li>
                <a data-scroll href="#contact-us">
                  Contact.
                </a>
              </li>
            </ul>
            <h6>© 2019 - Doob,All Right Reserved</h6>
            <ul class="social">
              <li>
                <a href="#">
                  <i class="icofont-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="icofont-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="icofont-dribbble"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
