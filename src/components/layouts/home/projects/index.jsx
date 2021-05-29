import React, { Component } from "react";
import { Link } from "react-router-dom";
import { projects } from "./data";

class CaseStudy extends Component {
  render() {
    return (
      <section className="flat-case-study s3" id="portfolio">
        <div className="container">
          <div className="d-md-flex">
            <div
              className="col-left animate-element wow delay5 fadeInDown"
              data-wow-delay="0.5s">
              <div className="image-link t2">
                <div className="featured-post">
                  <Link to="#">
                    <img src="images/section/52.jpg" alt="images" />
                  </Link>
                </div>
                <div className="portfolio-template-link text-center">
                  <Link to="#" className="text-white">
                    Portfolio Template
                  </Link>
                </div>
              </div>
              <div className="image-link t2">
                <div className="featured-post">
                  <Link to="#">
                    <img src="images/section/53.jpg" alt="images" />
                  </Link>
                </div>
              </div>
              <div className="fl-btn text-center">
                <Link to="#" className="f-w500">
                  Explore More
                </Link>
              </div>
            </div>
            <div
              className="flat-spacer"
              data-desktop={0}
              data-mobile={100}
              data-smobile={100}
            />
            <div
              className="col-right animate-element wow delay5 fadeInUp"
              data-wow-delay="0.5s">
              <div className="flat-title t2 mg-b60">
                <h4 className="sub-title mg-b13">Portfolio</h4>
                <h2 className="title-section color-d11 mg-b20">
                  Few selected works.
                </h2>
                <p className="color-d13">
                  {/*`I'm a professional UX designer with 4 years of experience. My
                  main focus is on listening and understanding your users.`*/}
                </p>
              </div>
              <div className="pd-right">
                {projects.map((project, ind) => (
                  <div key={ind} className="image-link t2">
                    <div className="featured-post">
                      <a href={project.link} target="_blank" rel="noreferrer">
                        <img
                          src={`images/section/${project.image}`}
                          alt="images"
                        />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CaseStudy;
