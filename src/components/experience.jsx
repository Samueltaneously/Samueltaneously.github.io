import React from "react";

export const Experience = (props) => {
  return (
    <div id="experience">
      <div className="container">
        <div className="section-title text-center">
          <h2>Experience</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-md-4">
                <div className="experience">
                  <div className="experience-image">
                    {" "}
                    <img src={d.img} alt="" />{" "}
                  </div>
                  <div className="experience-content">
                    <div className="experience-meta">  {d.name} </div>
                    <p>{d.text}</p>
                  </div>
                </div>
              </div>
            ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
