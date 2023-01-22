import React, {useState, useEffect} from 'react';
import { useFetch } from '../../../hooks/useFetch';
import { END_POINT } from '../../../services/endPoints';
import { TabButton } from '../../atoms/tabButton/tabButton';
import UnionRectVirus from '../trackerUnionRectVirus/UnionRectVirus';

function TrackerCardsCountries() {
   const data = useFetch(`${END_POINT}/countries/spain,france,germany,usa,italy,russia,uk,india,turkey`)
   const [selectedCountry, setSelectedCountry] = useState('Spain');  
   const [countryData, setCountryData] = useState({});

   // configura el país seleccionado y ejecuta la función de encontrar el país seleccionado
   const handleOnClick = country => {
    country && setSelectedCountry(country);
    handleFindData(country);
   }

   // encuentra el país seleccionado
   const handleFindData = country => {
    const newData = data && 
    data.find(item => item.country === country);
    newData && setCountryData(newData); 
   }

   //llena el countryData en el primer render, o sea, su estado inicial (España)
   useEffect(() => {
    handleFindData(selectedCountry);
   }, [data])

  return (
    <div id="tabs" className="tabs">
      <div className="tabs-container">
        <ol className="tabs-list">
          {data && data.map(item => {
            const { countryInfo, country } = item;
            return (
              <TabButton 
                key={country} 
                country={country}
                flag={countryInfo.flag} 
                isActive={selectedCountry === country}
                onSetActive={handleOnClick} //callback que se ejecuta en el componente
              />
            )
          })}
        </ol>
        <div className="tab-content">
          <UnionRectVirus data={countryData} />
        </div>
      </div>
    </div>
  )
}

export default TrackerCardsCountries