import Image from "./image";
import React from "react";

export const Portfolio = (props) => {

  const redirectToUrl = (url) => {
    window.location.href = url;
  };

  const handleImageClick = (e, url) => {
    e.preventDefault();
    e.stopPropagation();
    redirectToUrl(url);
  };

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Projects</h2>
          <p>
            Here are some of the cool projects I've made!
          </p>
          <div className="social">
            <ul>
              <li>
                <a href={"https://github.com/Samueltaneously"}>
                  <i className="fa fa-github"></i>
                </a>
              </li>
            </ul>
            My Github
          </div>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  className="col-sm-6 col-md-4 col-lg-4"
                >
                  <Image
                    title={d.title}
                    largeImage={d.largeImage}
                    smallImage={d.smallImage}
                    onClick={(e) => handleImageClick(e, d.location)}
                  />
                  <div>
                    <h4><strong>{d.title}</strong></h4>
                    <p>{d.description}</p>
                  </div>
                </div>
              ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
