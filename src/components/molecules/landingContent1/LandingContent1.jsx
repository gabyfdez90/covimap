import React from "react";
import phone1 from "../../../img/phones.png";
import "../landingContent1/landingContent1.css";

function LandingContent1() {
  return (
    <div className="landingContent1Container">
      <div className="landingContent1StoryText">
        <h2 className="landingContent1StoryTitle">
          Download the covid <br />
          app for get latest <br />
          up date
        </h2>
        <p>
          Human coronaviruses are common and are typically associated with
          <br />
          mild illnesses, similar to the common cold.The corona virus COVID-19
          is
          <br />
          affecting 210 countries & territories around the world and 2<br />
          international conveyances.
        </p>
      </div>
      <Button className="btnTwo" action="/tracker" text="Tracker" />
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
