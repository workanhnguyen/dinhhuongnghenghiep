import React from "react";

import { images } from "../../constants";
import "../../css/bootstrap.min.css";
import "./About.scss";

function About() {
  return (
    <section class="about">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-12 col-lg-6">
            <img src={images.aboutimg} alt="" />
          </div>
          <div class="col-12 col-sm-12 col-lg-6">
            <h5>OUR COMPANY</h5>
            <h2>
              Some Fine
              <br />
              Words About Us
            </h2>
            {/* <!-- Replace About Us Text Under --> */}
            <p>
              Vestibulum ac diam sit amet quam vehicula elementum amet est on
              dui. Nulla porttitor accumsan tincidunt.Vestibulum ac diam sit
              amet.Quam vehicula elementum amet est on dui. Nulla porttitor
              accumsan tincidunt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
