import React from "react";
import b2 from "../../../img/b-2.png";
import b3 from "../../../img/b-3.png";
import b4 from "../../../img/b-4.png";
import b5 from "../../../img/b-5.png";
import b6 from "../../../img/b-6.png";
import "../banner/banner.css";

function Banner() {
  return (
    <div className="container-baner">
      <div class="container">
        <div class="row">
          <div class="col"></div>
          <div class="col-10 text-center bg-white rounded">
            <div class="rowBanner">
              <div class="col-lg-2 text-center">
                <img className="imgBanner" src={b2} alt="time" />
              </div>
              <div class="col-lg-2 text-center">
                <img className="imgBanner" src={b3} alt="cean" />
              </div>
              <div class="col-lg-2 text-center">
                <img className="imgBanner" src={b4} alt="albero" />
              </div>
              <div class="col-lg-2 text-center">
                <img className="imgBanner" src={b5} alt="dora" />
              </div>
              <div class="col-lg-2 text-center">
                <img className="imgBanner" src={b6} alt="green" />
              </div>
              <div class="col-lg-2 text-center">
                <img className="imgBanner" src={b2} alt="time" />
              </div>
            </div>
          </div>
          <div class="col"></div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
