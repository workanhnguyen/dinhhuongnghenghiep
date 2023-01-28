import React from "react";

import { images } from "../../constants";
import "../../css/bootstrap.min.css";
import "./Blog.scss";

function Blog() {
  return (
    <section id="blog" class="blog">
      <div class="container-fluid">
        <div class="blog-aside">
          <img src={images.aside4} alt="" />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h5>BLOG STORIES</h5>
              <h2>Check Our News</h2>
            </div>
          </div>
          <div id="blog-drag" class="row blog-slider">
            <div class="col-12 col-lg-4 blog-box blog-first">
              {/* <!-- Blog Post Title --> */}
              <h6>NEW ADVENTURE</h6>
              {/* <!-- Blog Post Date --> */}
              <p>17 March 2019</p>
              {/* <!-- Blog Post --> */}
              <p>
                Vestibulum ac diam sit amet quam vehicula elementum amet est on
                dui. Nulla porttitor accumsan tincidunt.
              </p>
            </div>
            <div class="col-12 col-lg-4 blog-box">
              {/* <!-- Blog Post Title --> */}
              <h6>NEW ADVENTURE</h6>
              {/* <!-- Blog Post Date --> */}
              <p>17 March 2019</p>
              {/* <!-- Blog Post --> */}
              <p>
                Vestibulum ac diam sit amet quam vehicula elementum amet est on
                dui. Nulla porttitor accumsan tincidunt.
              </p>
            </div>
            <div class="col-12 col-lg-4 blog-box">
              {/* <!-- Blog Post Title --> */}
              <h6>NEW ADVENTURE</h6>
              {/* <!-- Blog Post Date --> */}
              <p>17 March 2019</p>
              {/* <!-- Blog Post --> */}
              <p>
                Vestibulum ac diam sit amet quam vehicula elementum amet est on
                dui. Nulla porttitor accumsan tincidunt.
              </p>
            </div>
            {/* <!-- Blog Section to be showed on Drag  --> */}
            <div class="col-12 col-lg-4 blog-box hiden-blog hide-blog">
              {/* <!-- Blog Post Title --> */}
              <h6>NEW ADVENTURE</h6>
              {/* <!-- Blog Post Date --> */}
              <p>17 March 2019</p>
              {/* <!-- Blog Post --> */}
              <p>
                Vestibulum ac diam sit amet quam vehicula elementum amet est on
                dui. Nulla porttitor accumsan tincidunt.
              </p>
            </div>
            <div class="col-12 col-lg-4 blog-box hiden-blog  hide-blog">
              {/* <!-- Blog Post Title --> */}
              <h6>NEW ADVENTURE</h6>
              {/* <!-- Blog Post Date --> */}
              <p>17 March 2019</p>
              {/* <!-- Blog Post --> */}
              <p>
                Vestibulum ac diam sit amet quam vehicula elementum amet est on
                dui. Nulla porttitor accumsan tincidunt.
              </p>
            </div>
            <div class="col-12 col-lg-4 blog-box hiden-blog  hide-blog">
              {/* <!-- Blog Post Title --> */}
              <h6>NEW ADVENTURE</h6>
              {/* <!-- Blog Post Date --> */}
              <p>17 March 2019</p>
              {/* <!-- Blog Post --> */}
              <p>
                Vestibulum ac diam sit amet quam vehicula elementum amet est on
                dui. Nulla porttitor accumsan tincidunt.
              </p>
            </div>
          </div>
          {/* <!-- Blog Button to Show More or Less on Mobile&Tablet View  --> */}
          <button class="hide-me" id="blog-btn">
            Show More Stories
          </button>
        </div>
      </div>
    </section>
  );
}

export default Blog;
