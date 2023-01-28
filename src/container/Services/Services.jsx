import React from "react";

import { images } from "../../constants";
import "../../css/bootstrap.min.css";
import "./Services.scss";

function Services() {
  return (
    <section id="about-us" class="services">
      <div class="container-fluid">
        <div class="side-img">
          <img src={images.aside} alt="" />
        </div>
        <div class="side2-img">
          <img src={images.aside2} alt="" />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-12 col-sm-12 col-lg-4 service-txt">
              <h2>Anything you need,we’ve got you covered</h2>
              <div class="hero-btns service-btn">
                <a data-scroll href="#contact-us">
                  Get in Touch
                </a>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-4">
              <div class="service-box">
                <img src={images.serviceIcon1} alt="" />
                {/* <!-- Service Title --> */}
                <h3>
                  Web & Graphic
                  <br />
                  Design
                </h3>
                {/* <!-- Replace Patch to Image Under --> */}
                <p>
                  Vestibulum ac diam sit amet quam vehicula elementum amet est
                  on dui. Nulla porttitor accumsan tincidunt.
                </p>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-4">
              <div class="service-box">
                <img src={images.serviceIcon2} alt="" />
                {/* <!-- Service Title --> */}
                <h3>
                  Web & App
                  <br />
                  Development
                </h3>
                {/* <!-- Service Info --> */}
                <p>
                  Vestibulum ac diam sit amet quam vehicula elementum amet est
                  on dui. Nulla porttitor accumsan tincidunt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
