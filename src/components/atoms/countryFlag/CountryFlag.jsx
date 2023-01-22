import React from 'react';
import ConsumoApi from '../../../services/ConsumoApi';
import '../countryFlag/countryFlag.css'

function CountryFlag() {
    const data = ConsumoApi().sort((a, b) => b.cases - a.cases);

    console.log(data);
    return (
          <div className="countries">
            {data.slice(0, 10).map((country) => (
              <button key={country.country} className="card-country">
                <img className="image-country" src={country.countryInfo.flag} alt="flags" />
                <p className="name-country">{country.country}</p>
              </button>
            ))}
          </div>
    )
  }

export default CountryFlag
