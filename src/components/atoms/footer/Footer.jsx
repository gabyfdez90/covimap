import React from "react";
import logoWhite from "../../../img/logoWhite.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import "../footer/footer.css";
function Footer() {
  return (
    <div className="Footer">
      <footer className="PieDePagina">
        <div>
          <div className="container">
            <div className="col" id="one">
              <button
                className="btn"
                onClick={() => console.log("Button clicked")}
              >
                <img className="logoWhite" src={logoWhite} alt="logo covimap" />
              </button>
              <p className="text">
                {" "}
                These droplets can land on objects and surfaces around the
                person such as tables, doorknobs and handrails.{" "}
              </p>
              <span id="icons">
                <button
                  className="btn1"
                  onClick={() => console.log("Button clicked")}
                >
                  <BsFacebook className="facebook" color="#2d5db6bb" />
                </button>
                <button
                  className="btn2"
                  onClick={() => console.log("Button clicked")}
                >
                  <AiFillTwitterCircle className="twitter" color="#2d5db6bb" />
                </button>
                <button
                  className="btn3"
                  onClick={() => console.log("Button clicked")}
                >
                  <FaLinkedin className="faLinkedin" color="#2d5db6bb" />
                </button>
                <button
                  className="btn4"
                  onClick={() => console.log("Button clicked")}
                >
                  <TiSocialYoutubeCircular
                    className="youtube"
                    color="#2d5db6bb"
                  />
                </button>
              </span>
            </div>
            <div className="col" id="two">
              <button
                className="btnQ"
                onClick={() => console.log("Button clicked")}
              >
                <p className="h4 ">Quic Links</p>
              </button>
              <p className="text">Prevention</p>
              <p className="text">Quarantine</p>
              <p className="text">About</p>
              <p className="text">Help</p>
            </div>
            <div className="col" id="three">
              <button
                className="btnA"
                onClick={() => console.log("Button clicked")}
              >
                <p className="h4 ">About</p>
              </button>
              <p className="text">Hand Wash</p>
              <p className="text">Social distance</p>
              <p className="text">Isolate</p>
              <p className="text">Difference</p>
            </div>
            <div className="col" id="four">
              <button
                className="btnA"
                onClick={() => console.log("Button clicked")}
              >
                <p className="h4">About</p>
              </button>
              <p className="text">Hand Wash</p>
              <p className="text">Social distance</p>
              <p className="text">Isolate</p>
              <p className="text">Difference</p>
            </div>
            <div className="col" id="five">
              <button
                className="btnH"
                onClick={() => console.log("Button clicked")}
              >
                <p className="h4 ">Help</p>
              </button>
              <p className="text">Hand Wash</p>
              <p className="text">Social distance</p>
              <p className="text">Isolate</p>
              <p className="text">Difference</p>
            </div>
          </div>
          <br />
          <br />
          <br />
          {/*Copyright*/}
          <div className="copyright">
            <p> © Copyright 2020. All Rights Reserved </p>{" "}
            <p>
              Design by<spam className="logo"> CT Tech</spam>
            </p>
          </div>
          {/* Copyright */}
        </div>
      </footer>
    </div>
  );
}
export default Footer;
