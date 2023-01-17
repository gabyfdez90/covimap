import React from "react";
import "./buttonDownload.css";
<<<<<<< HEAD

=======
>>>>>>> 452286b19cbd04d65230d63421dfc2053c6112e1
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

