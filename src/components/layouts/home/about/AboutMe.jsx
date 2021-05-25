import React, { Component } from "react";

class AboutMe extends Component {
  render() {
    return (
      <div
        className="col-lg-7 animate-element wow delay5 fadeInDown"
        data-wow-delay="0.5s">
        <div className="flat-title t1">
          <h4 className="sub-title mg-b22">About Me</h4>
          <h2 className="title-section color-d12 mg-b41">
            Hi, I am here to help your next project!
          </h2>
          <div className="description">
            <p className="lt-sp01">
              My name is Yusuf and I am a software engineer. I have been
              developing websites and applications for around 3 years. I’m a
              full stack developer and have experience in DevOps too. My skills
              includes HTML, CSS, Javascript, NodeJS, React, Typescript, Gitlab
              CI/CD, CircleCI. I’ve worked on large and small projects. The
              project I’m proudest of today is my work at a top startup in
              Toronto, Canada
            </p>
          </div>
          <h3 className="email position-relative">yourmail@email.com</h3>
        </div>
      </div>
    );
  }
}

export default AboutMe;
