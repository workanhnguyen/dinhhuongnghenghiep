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
              <h2 className="service-title">Mọi thứ bạn cần, chúng tôi cung cấp</h2>
              <div class="hero-btns service-btn">
                <a data-scroll href="#contact-us">
                  Trải nghiệm ngay
                </a>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-4">
              <div class="service-box">
                <img src={images.serviceIcon1} alt="" />
                {/* <!-- Service Title --> */}
                <h3>
                  Khảo sát
                  <br />
                  định hướng
                </h3>
                {/* <!-- Replace Patch to Image Under --> */}
                <p>
                  Thực hiện bài khảo sát và nhận ngay kết quả về lĩnh vực ngành nghề
                  phù hợp với bản thân.
                </p>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-4">
              <div class="service-box">
                <img src={images.serviceIcon2} alt="" />
                {/* <!-- Service Title --> */}
                <h3>
                  Tìm hiểu
                  <br />
                  trường đại học
                </h3>
                {/* <!-- Service Info --> */}
                <p>
                  Tìm thông tin chính thống về các trường đại học, tìm ra ngôi trường yêu thích.
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
