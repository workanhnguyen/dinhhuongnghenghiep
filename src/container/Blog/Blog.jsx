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
              <h5>TIN TỨC</h5>
              <h2>Theo dõi tin tức tuyển sinh của các trường top đầu</h2>
            </div>
          </div>
          <div id="blog-drag" class="row blog-slider">
            <div class="col-12 col-lg-4 blog-box blog-first">
              {/* <!-- Blog Post Title --> */}
              <h6>Trường Đại học Mở TPHCM</h6>
              {/* <!-- Blog Post Date --> */}
              <p>20 - 01 - 2023</p>
              {/* <!-- Blog Post --> */}
              <p>
                Chỉ tiêu tuyển sinh của Trường Đại học Mở thành phố Hồ Chí Minh năm 2023 là...
              </p>
            </div>
            <div class="col-12 col-lg-4 blog-box">
              {/* <!-- Blog Post Title --> */}
              <h6>Trường Đại học Mở TPHCM</h6>
              {/* <!-- Blog Post Date --> */}
              <p>20 - 01 - 2023</p>
              {/* <!-- Blog Post --> */}
              <p>
                Chỉ tiêu tuyển sinh của Trường Đại học Mở thành phố Hồ Chí Minh năm 2023 là...
              </p>
            </div>
            <div class="col-12 col-lg-4 blog-box">
              {/* <!-- Blog Post Title --> */}
              <h6>Trường Đại học Mở TPHCM</h6>
              {/* <!-- Blog Post Date --> */}
              <p>20 - 01 - 2023</p>
              {/* <!-- Blog Post --> */}
              <p>
                Chỉ tiêu tuyển sinh của Trường Đại học Mở thành phố Hồ Chí Minh năm 2023 là...
              </p>
            </div>
            {/* <!-- Blog Section to be showed on Drag  --> */}
            <div class="col-12 col-lg-4 blog-box hiden-blog hide-blog">
              {/* <!-- Blog Post Title --> */}
              <h6>Trường Đại học Mở TPHCM</h6>
              {/* <!-- Blog Post Date --> */}
              <p>20 - 01 - 2023</p>
              {/* <!-- Blog Post --> */}
              <p>
                Chỉ tiêu tuyển sinh của Trường Đại học Mở thành phố Hồ Chí Minh năm 2023 là...
              </p>
            </div>
            <div class="col-12 col-lg-4 blog-box hiden-blog hide-blog">
              {/* <!-- Blog Post Title --> */}
              <h6>Trường Đại học Mở TPHCM</h6>
              {/* <!-- Blog Post Date --> */}
              <p>20 - 01 - 2023</p>
              {/* <!-- Blog Post --> */}
              <p>
                Chỉ tiêu tuyển sinh của Trường Đại học Mở thành phố Hồ Chí Minh năm 2023 là...
              </p>
            </div>
            <div class="col-12 col-lg-4 blog-box hiden-blog hide-blog">
              {/* <!-- Blog Post Title --> */}
              <h6>Trường Đại học Mở TPHCM</h6>
              {/* <!-- Blog Post Date --> */}
              <p>20 - 01 - 2023</p>
              {/* <!-- Blog Post --> */}
              <p>
                Chỉ tiêu tuyển sinh của Trường Đại học Mở thành phố Hồ Chí Minh năm 2023 là...
              </p>
            </div>
          </div>
          {/* <!-- Blog Button to Show More or Less on Mobile&Tablet View  --> */}
          <button class="hide-me" id="blog-btn">
            Hiển thị thêm
          </button>
        </div>
      </div>
    </section>
  );
}

export default Blog;
