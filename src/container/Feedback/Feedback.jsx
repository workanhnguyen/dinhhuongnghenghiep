import React from "react";

import { images } from "../../constants";
import "../../css/bootstrap.min.css";
import "./Feedback.scss";

function Feedback() {
  return (
    <section id="contact-us" class="contact">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h5>CONTACT US</h5>
            <h2>Get in Touch</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-lg-6 email">
            <input
              placeholder="Your email"
              type="email"
              id="email"
              pattern=".+@globex.com"
              size="30"
              required
            />
          </div>
          <div class="col-12 col-lg-6 email">
            <input
              placeholder="Subject"
              type="subject"
              id="subject"
              size="30"
              required
            />
          </div>
        </div>
        <div class="row">
          <div class="col-12 message">
            <textarea id="message" name="message" rows="5" cols="1">
              Message here...
            </textarea>
          </div>
          <div class="col-12">
            <div class="hero-btns contact-btn">
              {/* <!-- Send Message Btn --> */}
              <a href="#">Send Message</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feedback;
