import React from "react";
import ConsumoApi from 'src/services/ConsumoApi.jsx'
import '../countryFlag/countryFlag.css'



function CountryFlag() {
  const data = ConsumoApi().sort((a, b) => b.cases - a.cases);

  console.log(data);
  return (
    <div className="titleTable">
      <h3>Top 10 Country</h3>
      <div className="containerlist">
        <ul class="country-list list-inline">
          {data.slice(0, 10).map((country) => (
            <li key={country.country} className="list-block-item">
              <img src={country.countryInfo.flag} alt=""></img>
              <span>{country.country}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CountryFlag;
