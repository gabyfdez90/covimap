import React from "react";
import "./buttonDownload.css";
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> 452286b19cbd04d65230d63421dfc2053c6112e1
>>>>>>> 02f62535f8459e01973a114182b9d7be6afd002b
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
