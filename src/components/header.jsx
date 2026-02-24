import React from "react";
import { WaveBackground } from "./WaveBackground";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <WaveBackground />
        <div className="overlay">
          <div className="intro-text">

            <h1>
              {props.data ? props.data.title : "Loading"}
              <span></span>
            </h1>
            <h2>
              {props.data ? props.data.role : "Loading"}
            </h2>
            <p>{props.data ? props.data.paragraph : "Loading"}</p>
            <a
              href="#about"
              className="btn btn-custom btn-lg"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#about")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              Learn More
            </a>{" "}

          </div>
        </div>
      </div>
      {/* <div style={{ backgroundColor: "#232323", color: '#fefefe' }}><h7>Image From: <a href="https://www.hotpot.ai/art-generator">hotpot.ai</a></h7></div> */}
    </header>
  );
};
