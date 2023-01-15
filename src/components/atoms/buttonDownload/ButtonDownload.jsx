import React from "react";
import "./buttonDownload.css";

const ButtonDownload = ({ background, color }) => {
  return (
    <div>
      <button
        style={{ background: background, color: color }}
        className="btnOne"
      >
        Tracker
      </button>

      {/*<button
        style={{ background: background, color: color }}
        className="btnTwo"
      >
        HOW TO PROTECT
  </button>*/}
    </div>
  );
};

export default ButtonDownload;
