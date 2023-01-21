import React from 'react'
import CasesConter from '../../atoms/tracker/rectVirus/RectVirus';
import './unionRectVirus.css'
import { END_POINT } from "../../../services/endPoints";
import { useFetch } from "../../../hooks/useFetch";

function UnionRectVirus() {
    const {data} = useFetch(`${END_POINT}/all`);

    return (
    <div className='UnionRectVirusContainer'>
        <h2>COVID-19 Tracker</h2>
        <CasesConter theme="theme" label="Total Cases" numberToday={`+${data.todayCases}`} numberTotal={data.cases} />
        <CasesConter theme="theme" label="Total Death" numberTotal={data.active} />
        <CasesConter theme="theme" label="Total Recovered" numberToday={`+${data.todayRecovered}`} numberTotal={data.recovered} />
        <CasesConter theme="theme" label="Total Active" numberToday={`+${data.todayDeaths}`} numberTotal={data.deaths} />
        <CasesConter theme="theme" label="New Cases" numberToday={`+${data.todayDeaths}`} numberTotal={data.deaths} />
        <CasesConter theme="theme" label="New Death" numberToday={`+${data.todayDeaths}`} numberTotal={data.deaths} />
    </div>
  )
}

export default UnionRectVirus;