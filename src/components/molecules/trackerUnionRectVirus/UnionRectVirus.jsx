import React from 'react'
import CasesConter from '../../atoms/tracker/rectVirus/RectVirus';
import './unionRectVirus.css'
import { END_POINT } from "../../../services/endPoints";
import { useFetch } from "../../../hooks/useFetch";

function UnionRectVirus() {
    const {data} = useFetch(`${END_POINT}/all`);

    return (
    <div className='unionRectVirusContainer'>
       
        <CasesConter theme="theme" label="Total Cases" numberToday={`+${data.todayCases}`} numberTotal={data.cases} />
        <CasesConter theme="theme1" label="Total Death" numberTotal={data.deaths} />
        <CasesConter theme="theme2" label="Total Recovered" numberToday={`+${data.todayRecovered}`} numberTotal={data.recovered} />
        <CasesConter theme="theme3" label="Total Active" numberToday={`+${data.todalActive}`} numberTotal={data.active} />
        <CasesConter theme="theme4" label="New Cases" numberToday={`+${data.newCase}`} numberTotal={data.cases} />
        <CasesConter theme="theme5" label="New Death" numberToday={`+${data.newDeaths}`} numberTotal={data.deaths} />
    </div>
  )
}

export default UnionRectVirus;