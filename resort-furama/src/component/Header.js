import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../../src/assets/images/logo/furama-hotel-logo.png';
function Header() {
  return (
    <header>
      <div className="header-area ">
        <div id="sticky-header" className="main-header-area">
          <div className="container-fluid">
            <div className="header_bottom_border">
              <div className="row align-items-center">
                <div className="col-xl-2 col-lg-2">
                  <div className="logo">
                    <a href="index.html">
                      <img
                        src={logo}
                        alt=""
                        style={{ maxWidth: 250, maxHeight: 35 }}
                      />
                    </a>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="main-menu  d-none d-lg-block">
                    <nav>
                      <ul id="navigation">
                        <li>
                          <NavLink className="active" to={"/"}>
                            home
                          </NavLink>
                        </li>
                        {/*<li>*/}
                        {/*  <a href="about.html">About</a>*/}
                        {/*</li>*/}
                        <li>
                          <a className="" href="">
                            Service <i className="ti-angle-down" />
                          </a>
                          <ul className="submenu">
                            <li>
                              <NavLink to={"service/create"}>Create</NavLink>
                            </li>
                            <li>
                              {/* <NavLink to={"service/edit"}>Edit</NavLink> */}
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            Customer <i className="ti-angle-down" />
                          </a>
                          <ul className="submenu">
                            <li>
                              <NavLink to={"customer/list"}>List</NavLink>
                            </li>
                            <li>
                              <NavLink to={"customer/create"} className={"hải"}>Create</NavLink>
                            </li>
                            <li>
                              {/* <NavLink to={"customer/edit"}>Edit</NavLink> */}
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            Contract <i className="ti-angle-down" />
                          </a>
                          <ul className="submenu">
                            <li>
                              <NavLink to={"contract/list"}>List</NavLink>
                            </li>
                            <li>
                              <NavLink to={"contract/create"}>Create</NavLink>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 d-none d-lg-block">
                  <div className="social_wrap d-flex align-items-center justify-content-end">
                    <div className="number">
                      <p>
                        {" "}
                        <i className="fa fa-phone" /> +84978-7878-5678
                      </p>
                    </div>
                    <div className="social_links d-none d-xl-block">
                      <ul>
                        <li>
                          <a href="#">
                            {" "}
                            <i className="fa fa-instagram" />{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            {" "}
                            <i className="fa fa-linkedin" />{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            {" "}
                            <i className="fa fa-facebook" />{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            {" "}
                            <i className="fa fa-google-plus" />{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="seach_icon">
                  <a
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                    href="#"
                  >
                    <i className="fa fa-search" />
                  </a>
                </div>
                <div className="col-12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
