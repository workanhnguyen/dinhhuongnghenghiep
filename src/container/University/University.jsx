import React from "react";

import { images } from "../../constants";
import "../../css/bootstrap.min.css";
import "./University.scss";

function University() {
  return (
    <section id="portfolio" class="portfolio">
      <div class="container-fluid">
        <div class="portfolio-aside">
          <img src={images.aside3} alt="" />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h2>
                See some of our
                <br />
                Creative work.
              </h2>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-lg-4 work-box">
              <div class="photobox photobox_type10">
                <div class="photobox__previewbox">
                  {/* <!-- Replace Patch to Image Under --> */}
                  <img
                    src={images.one}
                    class="photobox__preview"
                    alt="Preview"
                  />
                  {/* <!-- Replace Image Title Under --> */}
                  <span class="photobox__label">Awesome Work</span>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-4 work-box">
              <div class="photobox photobox_type10">
                <div class="photobox__previewbox">
                  {/* <!-- Replace Patch to Image Under --> */}
                  <img
                    src={images.two}
                    class="photobox__preview"
                    alt="Preview"
                  />
                  {/* <!-- Replace Image Title Under --> */}
                  <span class="photobox__label">Awesome Work</span>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-4 work-box">
              <div class="photobox photobox_type10">
                <div class="photobox__previewbox">
                  {/* <!-- Replace Patch to Image Under --> */}
                  <img
                    src={images.three}
                    class="photobox__preview"
                    alt="Preview"
                  />
                  {/* <!-- Replace Image Title Under --> */}
                  <span class="photobox__label">Awesome Work</span>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-lg-4 work-box">
              <div class="photobox photobox_type10">
                <div class="photobox__previewbox">
                  {/* <!-- Replace Patch to Image Under --> */}
                  <img
                    src={images.four}
                    class="photobox__preview"
                    alt="Preview"
                  />
                  {/* <!-- Replace Image Title Under --> */}
                  <span class="photobox__label">Awesome Work</span>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-4 work-box">
              <div class="photobox photobox_type10">
                <div class="photobox__previewbox">
                  {/* <!-- Replace Patch to Image Under --> */}
                  <img
                    src={images.five}
                    class="photobox__preview"
                    alt="Preview"
                  />
                  {/* <!-- Replace Image Title Under --> */}
                  <span class="photobox__label">Awesome Work</span>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-4 work-box">
              <div class="photobox photobox_type10">
                <div class="photobox__previewbox">
                  {/* <!-- Replace Patch to Image Under --> */}
                  <img
                    src={images.six}
                    class="photobox__preview"
                    alt="Preview"
                  />
                  {/* <!-- Replace Image Title Under --> */}
                  <span class="photobox__label">Awesome Work</span>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Hidden Images From Portfolio --> */}
          <div id="hiden-gallery" class="hide">
            <div class="row">
              <div class="col-12 col-lg-4 work-box">
                <div class="photobox photobox_type10">
                  <div class="photobox__previewbox">
                    {/* <!-- Replace Patch to Image Under --> */}
                    <img
                      src={images.five}
                      class="photobox__preview"
                      alt="Preview"
                    />
                    {/* <!-- Replace Image Title Under --> */}
                    <span class="photobox__label">Awesome Work</span>
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-4 work-box">
                <div class="photobox photobox_type10">
                  <div class="photobox__previewbox">
                    {/* <!-- Replace Patch to Image Under --> */}
                    <img
                      src={images.three}
                      class="photobox__preview"
                      alt="Preview"
                    />
                    {/* <!-- Replace Image Title Under --> */}
                    <span class="photobox__label">Awesome Work</span>
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-4 work-box">
                <div class="photobox photobox_type10">
                  <div class="photobox__previewbox">
                    {/* <!-- Replace Patch to Image Under --> */}
                    <img
                      src={images.one}
                      class="photobox__preview"
                      alt="Preview"
                    />
                    {/* <!-- Replace Image Title Under --> */}
                    <span class="photobox__label">Awesome Work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12 more-btn">
              {/* <!-- Show Me More/Less Button --> */}
              <a class="more-btn-inside">Show More.</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default University;
