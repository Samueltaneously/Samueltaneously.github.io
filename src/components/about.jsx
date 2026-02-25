import React, { useState, useEffect } from "react";

export const About = (props) => {
  const [isMobile, setIsMobile] = useState(false);

  // Listen for window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const skills = props.data
    ? [...props.data.Why, ...props.data.Why2, ...props.data.Why3]
    : [];

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img src="img/about.jpg" className="img-responsive" alt="" />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Me</h2>
              <p>{props.data ? props.data.intro : "loading..."}</p>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>Skills</h3>

              <div className="list-style">
                {!isMobile ? (
                  // Desktop: 3 columns
                  <div className="desktop-columns">
                    <div className="col-lg-3 col-sm-3 col-xs-12">
                      <ul>
                        {props.data
                          ? props.data.Why.map((d, i) => (
                            <li key={`${d}-${i}`}>{d}</li>
                          ))
                          : "loading"}
                      </ul>
                    </div>
                    <div className="col-lg-3 col-sm-3 col-xs-12">
                      <ul>
                        {props.data
                          ? props.data.Why2.map((d, i) => (
                            <li key={`${d}-${i}`}>{d}</li>
                          ))
                          : "loading"}
                      </ul>
                    </div>
                    <div className="col-lg-3 col-sm-3 col-xs-12">
                      <ul>
                        {props.data
                          ? props.data.Why3.map((d, i) => (
                            <li key={`${d}-${i}`}>{d}</li>
                          ))
                          : "loading"}
                      </ul>
                    </div>
                  </div>
                ) : (
                  // Mobile: merged 2-column grid
                  <ul className="mobile-merged">
                    {skills.map((d, i) => (
                      <li key={`mobile-${i}`}>{d}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};