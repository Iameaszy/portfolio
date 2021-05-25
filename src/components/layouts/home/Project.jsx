import React, { Component } from "react";
import { twitterUrl, linkedinUrl, githubUrl } from "./constants";
class Project extends Component {
  render() {
    return (
      <section className="get-project s4">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="featured-post animate-element wow delay5 fadeZooming"
                data-wow-delay="0.5s">
                <img
                  src="images/section/57.jpg"
                  className="img-fluid"
                  alt="images"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="content-inner animate-element wow delay5 fadeInUp"
                data-wow-delay="0.5s">
                <h2 className="title mg-b14 color-d11">Say Hello!</h2>
                <div className="site-list has-border">
                  <a
                    href={githubUrl}
                    target="_blank"
                    className="bg-s4"
                    rel="noreferrer">
                    <i className="fa fa-github" aria-hidden="true" />
                  </a>
                  <a
                    href={twitterUrl}
                    target="_blank"
                    className="bg-s1"
                    rel="noreferrer">
                    <i className="fa fa-twitter" aria-hidden="true" />
                  </a>
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    className="bg-s2"
                    rel="noreferrer">
                    <i className="fa fa-linkedin" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Project;
