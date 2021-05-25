import React, { Component } from "react";
import { contentTop, contentbot } from "./constants";
class TopEducation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contenttop: [...contentTop],
      contentbot: [...contentbot],
    };
  }

  render() {
    return (
      <div className="animate-element delay5 fadeInUp">
        <div className="padding-bottom">
          <div className="row">
            {this.state.contenttop.map((data) => (
              <div
                className="col-lg-4 col-12 last-col animate-element wow delay5 fadeIn"
                data-wow-delay={data.datawow}
                key={data.id}>
                <div className={data.classname}>
                  <div className="box-inner">
                    <h3 className="f-info bg-s2 color-d6">{data.year}</h3>
                    <div className="exp-wrap">
                      <div className="s-info color-d11 mg-b11">
                        {data.school}
                      </div>
                      <p className="color-d13">{data.course}</p>
                      <small>{data.award}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="row">
          {this.state.contentbot.map((data) => (
            <div
              className="col-lg-4 col-12 last-col animate-element wow delay5 fadeIn"
              data-wow-delay={data.datawow}
              key={data.id}>
              <div className={data.classname}>
                <div className="box-inner">
                  <h3 className="f-info bg-s2 color-d6">{data.year}</h3>
                  <div className="exp-wrap">
                    <div className="s-info color-d11 mg-b11">
                      {data.title}
                      <p>
                        <a
                          href={data.companyLink}
                          target="_blank"
                          rel="noreferrer">
                          {data.company}
                        </a>
                      </p>
                    </div>
                    <p
                      className="color-d13"
                      dangerouslySetInnerHTML={{
                        __html: data.description,
                      }}></p>
                    <p>{data.stack}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default TopEducation;
