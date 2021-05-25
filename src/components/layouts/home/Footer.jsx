import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  facebookUrl,
  githubUrl,
  instagramUrl,
  linkedinUrl,
  twitterUrl,
} from "./constants";

class Footer extends Component {
  render() {
    return (
      <div className="tf-modal-content justify-content-end">
        <footer id="footer" className="footer footer-s4">
          <div className="container">
            <div
              id="footer-widget"
              className="footer-widget-s3 border-bottom-s2 position-relative">
              <h3 className="widget-title larger lt-sp06 text-white text-center">
                Let’s try me!
              </h3>
              <div className="site-list site-list-center text-center">
                <a
                  href={twitterUrl}
                  className="bg-s1"
                  target="_blank"
                  rel="noreferrer">
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
                <a
                  href={githubUrl}
                  className="bg-s4"
                  target="_blank"
                  rel="noreferrer">
                  <i className="fa fa-github" aria-hidden="true" />
                </a>
                <a
                  href={linkedinUrl}
                  target="_blank"
                  className="bg-s2"
                  rel="noreferrer">
                  <span className="fa fa-linkedin" />
                </a>
              </div>
            </div>
          </div>
          <div id="bottom" className="bottom-s3">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="copyright lt-sp02">
                    © Yusuf, {new Date().getFullYear()} All rights reserved.
                  </div>
                </div>
                <div className="col-lg-6">
                  <ul className="widget-nav-menu color-s2">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    {/*<li><Link to="#">Portfolio</Link></li>*/}
                    <li>
                      <Link to="#about">About</Link>
                    </li>
                    <li>
                      <Link to="#resume">Resume</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-2">
                  <div className="socials-list color-s2">
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
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
