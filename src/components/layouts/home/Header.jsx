import React, { Component } from "react";
import { Link } from "react-router-dom";
import menus from "../menus";
import { facebookUrl, twitterUrl, instagramUrl } from "./constants";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <header id="header" className="header header-style4 has-menu-model">
        <div className="container">
          <div className="flex-header d-flex justify-content-between align-items-center">
            <div id="logo" className="logo">
              <Link
                to="/"
                onClick={() => {
                  window.location.href = "/";
                }}
                title="Logo">
                <img
                  src="images/logo/02.png"
                  alt="images"
                  data-width={122}
                  data-height={34}
                  data-retina="images/logo/02@2x.png"
                />
              </Link>
            </div>
            <div dir="rtl" className="btn-menu mobile-header__menu-button">
              <div className="line line-1" />
              <div className="line line-2" />
              <div className="line line-3" />
              <div className="line line-4" />
            </div>
            <div className="content-menu d-lg-flex">
              <div className="nav-wrap">
                <nav id="mainnav" className="mainnav">
                  <ul
                    className="menu ace-responsive-menu"
                    data-menu-style="horizontal">
                    <li>
                      <Link to="/" className="active">
                        Home
                      </Link>
                    </li>
                    {menus.map((menu) => (
                      <li key={menu.id}>
                        <Link to={menu.tomenu} className="click-model">
                          {menu.namemenu}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link to="#">Blog</Link>
                      {/* <ul className="sub-menu">
                        {bloglinks.map((data) => (
                          <li key={data.id}>
                            <Link
                              to={data.toblog}
                              onClick={() => {
                                //window.location.href = data.toblog;
                              }}>
                              {data.nameblog}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      */}
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="socials-list-hd s3 hv2">
              <a href={facebookUrl} target="_blank" rel="noreferrer">
                <i className="fa fa-facebook" aria-hidden="true" />
              </a>
              <a href={instagramUrl} target="_blank" rel="noreferrer">
                <i className="fa fa-instagram" aria-hidden="true" />
              </a>
              <a href={twitterUrl} target="_blank" rel="noreferrer">
                <i className="fa fa-twitter" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
