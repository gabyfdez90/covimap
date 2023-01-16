import React from "react";
import "./buttonDownload.css";

const Button = (props) => {
  return (
    <button
      className={props.className}
      onClick={() => (window.location.href = props.action)}
    >
      {props.text}
    </button>
  );
};
export default Button;

