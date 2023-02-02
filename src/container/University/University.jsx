import React, { useState, memo } from "react";
import { Link } from "react-router-dom";

import { images } from "../../constants";
import "../../css/bootstrap.min.css";
import "./University.scss";

const universities = [
  { image: images.logoBK, showed: true },
  { image: images.logoOU, showed: true },
  { image: images.logoUEH, showed: true },
  { image: images.logoUEL, showed: true },
  { image: images.logoUSSH, showed: true },
  { image: images.logoUIT, showed: true },
  { image: images.logoUTE, showed: false },
  { image: images.logoIUH, showed: false },
  { image: images.logoFTU, showed: false },
]

function University() {

  const [uniList, setUniList] = useState(universities);
  const [toggleShowMoreUni, setToggleShowMoreUni] = useState(false);

  return (
    <section id="university" className="portfolio">
      <div className="container-fluid">
        <div className="portfolio-aside">
          <img src={images.aside3} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>
                Một số trường đại học
                <br />
                ở Thành phố Hồ Chí Minh
              </h2>
            </div>
          </div>
          <div className="row">
            {uniList.map((item, index) => {
              if (item.showed === true)
                return (
                  <div key={index} className="col-12 col-lg-4 work-box">
                    <div className="photobox photobox_type10">
                      <Link to="/login" className="photobox__previewbox">
                        <img 
                          src={item.image}
                          className="photobox__preview"
                          alt="Preview"
                        />
                        <span className="photobox__label">Đăng nhập để xem</span>
                      </Link>
                    </div>
                  </div>
                );
            })}
          </div>
          {/* <!-- Hidden Images From University --> */}
          <div id="hiden-gallery" className="hide">
            <div className="row">
              {universities.map((item, index) => {
                if (item.showed === false)
                  return (
                    <div key={index} className="col-12 col-lg-4 work-box">
                      <div className="photobox photobox_type10">
                        <div className="photobox__previewbox">
                          <img 
                            src={item.image}
                            className="photobox__preview"
                            alt="Preview"
                          />
                          <span className="photobox__label">Đăng nhập để xem</span>
                        </div>
                      </div>
                    </div>
                  );
              })}
            </div>
          </div>
          <div className="row">
            <div className="col-12 more-btn">
              {/* <!-- Show Me More/Less Button --> */}
              {toggleShowMoreUni ? null : (
                <a onClick={() => {
                  setUniList(uniList.map((item) => {
                    if (item.showed === false)
                      item.showed = true;
                      return item;
                    }))
                    setToggleShowMoreUni(true)
                  }} 
                className="more-btn-inside"
                >
                  Hiển thị thêm
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(University);
