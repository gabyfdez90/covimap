import React from 'react'
import CasesBox from '../../atoms/casesBox/CasesBox'
import './colorBoxesSection.css'
import { END_POINT } from "../../../services/endPoints";
import { useFetch } from "../../../hooks/useFetch";

function ColorBoxesSection() {
    const {data} = useFetch(`${END_POINT}/all`);

    return (
    <div className='colorBoxesSectionContainer'>
        <h2>COVID-19 Tracker</h2>
        <CasesBox theme="themeRed" label="Total Cases" numberToday={`+${data.todayCases}`} numberTotal={data.cases} />
        <CasesBox theme="themeYellow" label="Active Cases" numberTotal={data.active} />
        <CasesBox theme="themeGreen" label="Recovered Cases" numberToday={`+${data.todayRecovered}`} numberTotal={data.recovered} />
        <CasesBox theme="themeBlue" label="Death Cases" numberToday={`+${data.todayDeaths}`} numberTotal={data.deaths} />
    </div>
  )
}

export default ColorBoxesSection