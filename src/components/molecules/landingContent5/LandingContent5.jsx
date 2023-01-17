import React from 'react';
import 'landingContent5.css';

const LandingContent5 = ({ text, image }) => {
  return (
    <div className="container">
      <div>{text}</div>
      <img src={image} alt="" className="image" />
    </div>
  );
}

export default LandingContent5;