import React from "react";
import b2 from "../../../img/b-2.png";
import b3 from "../../../img/b-3.png";
import b4 from "../../../img/b-4.png";
import b5 from "../../../img/b-5.png";
import b6 from "../../../img/b-6.png";
import '../banner/banner.css'

function Banner() {
  return (
    <div className="text-center bg-white rounded" id="container-baner">
      <div class="col-lg-2 text-center">
        <img className="logoBanner"src={b2} alt="time" />
      </div>
      <div class="col-lg-2 text-center">
        <img className="logoBanner" src={b3} alt="cean" />
      </div>
      <div class="col-lg-2 text-center">
        <img className="logoBanner" src={b4} alt="albero" />
      </div>
      <div class="col-lg-2 text-center">
        <img className="logoBanner" src={b5} alt="dora" />
      </div>
        <div class="col-lg-2 text-center">
      <img className="logoBanner" src={b6} alt="green" />
        </div>
      <div class="col-lg-2 text-center">
        <img className="logoBanner" src={b2} alt="time" />
      </div>
    </div>
  );
}

export default Banner;
