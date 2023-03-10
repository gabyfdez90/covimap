import React from "react";
import logoWhite from "../../../img/logoWhite.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { ImFacebook } from "react-icons/im";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin} from "react-icons/ti";
import { TfiYoutube } from "react-icons/tfi";
import "../footer/footer.css";
function Footer() {
  return (
    <div>
      <footer className="PieDePagina">
        <div>
          <div className="containerFooter">
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
                <div className="iconsFooter d-flex">
                  <div
                    className="btn1"
                    onClick={() => console.log("Button clicked")}
                  >
                    <ImFacebook
                      className="facebook"
                      color="white"
                      
                    />
                  </div>
                  <div
                    className="btn2"
                    onClick={() => console.log("Button clicked")}
                  >
                    <TiSocialTwitter
                      className="twitter"
                      color="white"
                      
                    />
                  </div>
                  <div
                    className="btn3"
                    onClick={() => console.log("Button clicked")}
                  >
                    <TiSocialLinkedin
                      className="Linkedin" 
                      color="white"
                      
                       />
                  </div>
                  <div
                    className="btn4"
                    onClick={() => console.log("Button clicked")}
                  >
                    <TfiYoutube
                      className="youtube"
                      color="white"
                    />
                  </div>
                </div>
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
            <p> ?? Copyright 2020. All Rights Reserved </p>{" "}
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
