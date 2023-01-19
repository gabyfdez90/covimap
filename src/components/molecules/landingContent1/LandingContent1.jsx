import React from "react";
import phone1 from "../../../img/phones.png";
import "../landingContent1/landingContent1.css";
import ButtonDownload from "../../atoms/buttonDownload/ButtonDownload";
import Cart from "../../shareIcons/Untitled.png";
import Headset from "../../shareIcons/headset-solid 1.png";
import Share from "../../shareIcons/share-solid 1.png";
import ButtonShare from "../../atoms/buttonShare/ButtonShare";

function LandingContent1() {
  return (
    <div className="landingContent1Container">
      <div className="landingContent1StoryText">
        <div className="ButShare">
          <ButtonShare color="#FE6550" icon={Share} />
          <ButtonShare color="#32D9BA" icon={Headset} />
          <ButtonShare color="#94BF54" icon={Cart} />
        </div>
        <h2 className="landingContent1StoryTitle">
          Download the covid <br />
          app for get latest <br />
          up dategit
        </h2>
        <br></br>
        <p>
          Human coronaviruses are common and are typically associated with
          <br />
          mild illnesses, similar to the common cold.The corona virus COVID-19
          is
          <br />
          affecting 210 countries & territories around the world and 2<br />
          international conveyances.
        </p>
        <ButtonDownload
          className="btnTwo"
          action="/howToProtec"
          text="How To Protec"
        />
      </div>

      <div className="LandingContent1Story">
        <img
          className="landingContent1Phone"
          src={phone1}
          alt="phone statistics app"
        />
      </div>
    </div>
  );
}

export default LandingContent1;
