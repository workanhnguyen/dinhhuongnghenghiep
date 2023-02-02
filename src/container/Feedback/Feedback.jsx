import React from "react";

import { images } from "../../constants";
import "../../css/bootstrap.min.css";
import "./Feedback.scss";

function Feedback() {
  return (
    <section id="feedback" className="contact">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h5>PHẢN HỒI</h5>
            <h2>Đóng góp ý kiến</h2>
          </div>
        </div>
        <form>
          <div className="row">
            <div className="col-12 col-lg-6 email">
              <input
                placeholder="Nhập email"
                type="email"
                id="email"
                pattern=".+@gmail.com"
                size="30"
                required
              />
            </div>
            <div className="col-12 col-lg-6 email">
              <input
                placeholder="Tiêu đề"
                type="subject"
                id="subject"
                size="30"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 message">
              <textarea id="message" name="message" rows="5" cols="1" placeholder="Nội dung..."></textarea>
            </div>
            <div className="col-12">
              <div className="hero-btns contact-btn">
                {/* <!-- Send Message Btn --> */}
                <button type="submit">Gửi phản hồi</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Feedback;
