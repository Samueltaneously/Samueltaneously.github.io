import React from "react";

const Image = ({ title, largeImage, smallImage, onClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onClick(e);
  };

  return (
    <div className="portfolio-item">
      <div className="hover-bg" onClick={handleClick} style={{ cursor: 'pointer' }}>
        <div className="hover-text">
          <h4>{title}</h4>
        </div>
        <img src={smallImage} className="img-responsive" alt={title} />
      </div>
    </div>
  );
};

export default Image;
