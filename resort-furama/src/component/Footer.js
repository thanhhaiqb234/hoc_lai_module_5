import React from "react";
import logo from "../../src/assets/images/logo/furama-hotel-logo.png";
import instagram1 from "../../src/assets/images/instagram/1.png";
import instagram2 from "../../src/assets/images/instagram/2.png";
import instagram3 from "../../src/assets/images/instagram/3.png";
import instagram4 from "../../src/assets/images/instagram/4.png";
import instagram5 from "../../src/assets/images/instagram/5.png";
import instagram6 from "../../src/assets/images/instagram/6.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_top">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-md-6 col-lg-4 ">
              <div className="footer_widget">
                <div className="footer_logo">
                  <a href="#">
                    <img
                      src={logo}
                      alt=""
                      style={{
                        maxWidth: 250,
                        maxHeight: 35,
                        backgroundColor: "white",
                      }}
                    />
                  </a>
                </div>
                <p>
                  105 Vo Nguyen Giap Street, Khue My Ward,
                  <br /> Ngu Hanh Son, District Da Nang <br /> Da Nang
                  Municipality <br />
                  <a href="#">+849.7878.5678</a> <br />
                  <a href="#">contact@carpenter.com</a>
                </p>
                <div className="socail_links">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="ti-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ti-twitter-alt" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-pinterest" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-youtube-play" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-md-6 col-lg-2">
              <div className="footer_widget">
                <h3 className="footer_title">Company</h3>
                <ul className="links">
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#"> Gallery</a>
                  </li>
                  <li>
                    <a href="#"> Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-lg-3">
              <div className="footer_widget">
                <h3 className="footer_title">Popular destination</h3>
                <ul className="links double_links">
                  <li>
                    <a href="#">VietNamese</a>
                  </li>
                  <li>
                    <a href="#">America</a>
                  </li>
                  <li>
                    <a href="#">India</a>
                  </li>
                  <li>
                    <a href="#">Switzerland</a>
                  </li>
                  <li>
                    <a href="#">Italy</a>
                  </li>
                  <li>
                    <a href="#">Canada</a>
                  </li>
                  <li>
                    <a href="#">Franch</a>
                  </li>
                  <li>
                    <a href="#">England</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-lg-3">
              <div className="footer_widget">
                <h3 className="footer_title">Instagram</h3>
                <div className="instagram_feed">
                  <div className="single_insta">
                    <a href="#">
                      <img src={instagram6} alt="" />
                    </a>
                  </div>
                  <div className="single_insta">
                    <a href="#">
                      <img src={instagram1} alt="" />
                    </a>
                  </div>
                  <div className="single_insta">
                    <a href="#">
                      <img src={instagram2} alt="" />
                    </a>
                  </div>
                  <div className="single_insta">
                    <a href="#">
                      <img src={instagram3} alt="" />
                    </a>
                  </div>
                  <div className="single_insta">
                    <a href="#">
                      <img src={instagram4} alt="" />
                    </a>
                  </div>
                  <div className="single_insta">
                    <a href="#">
                      <img src={instagram5} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right_text">
        <div className="container">
          <div className="footer_border" />
          <div className="row">
            <div className="col-xl-12">
              <p className="copy_right text-center">
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                Copyright © All rights reserved | This template is made with{" "}
                <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
                <a href="#" target="_blank">
                  Furama Design Team
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
