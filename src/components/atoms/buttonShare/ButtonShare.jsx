import React from "react";
import "./buttonShare.css";

const ButtonShare = ({ color, icon }) => {
  return (
    <div>
      <button className="buttonShare" style={{ background: color }}>
        <img src={icon} alt="icono" height="20px" width="20px" />{" "}
      </button>
    </div>
  );
};

export default ButtonShare;

//<ButtonShare color ="#FE6550" icon={Share}/>
//<ButtonShare color ="#32D9BA" icon={Headset}/>
//<ButtonShare color ="#94BF54" icon={Cart}/>

//import Cart from "./components/shareIcons/Untitled.png"
//import Headset from "./components/shareIcons/headset-solid 1.png"
//import Share from "./components/shareIcons/share-solid 1.png"

//import ButtonShare from "./components/atoms/buttonShare/ButtonShare"
