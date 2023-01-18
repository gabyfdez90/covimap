import React, { useState, useEffect } from 'react';

function CountryFlag(props) {
  const [country, setCountry] = useState({});

  useEffect(() => {
    fetch(`https://disease.sh/v3/covid-19/countries`)
      .then(response => response.json())
      .then(data => setCountry(data[0]));
  }, [props.name]);

  return (
    <div>
      <img src={country} alt={`Flag of ${country}`} />
      <p>{country}</p>
    </div>
  );
}

export default CountryFlag;
