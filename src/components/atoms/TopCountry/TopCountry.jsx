import React from "react";
import ConsumoApi from "../../../services/ConsumoApi";
import "../TopCountry/topCountry.css";

function TopCountry() {
  const data = ConsumoApi().sort((a, b) => b.cases - a.cases);

  return (
    <div className="titleTable">
      <h3>Top 10 Country</h3>
      <div className="containerlist">
        <ul class="country-list list-inline">
          {data.slice(0, 10).map((country) => (
            <li key={country.country} className="list-block-item">
              <img src={country.countryInfo.flag} alt=""></img>
              <span>{country.country}</span>
              <h6 class="dz-confirmed">{country.cases}</h6>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TopCountry;
