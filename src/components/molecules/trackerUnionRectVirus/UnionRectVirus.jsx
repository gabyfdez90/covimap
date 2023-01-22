import React from 'react'
import CasesConter from '../../atoms/tracker/rectVirus/RectVirus';
import '../trackerUnionRectVirus/unionRectVirus.css';
import '../../atoms/tracker/rectVirus/rectVirus.css';
import { END_POINT } from "../../../services/endPoints";
import { useFetch } from "../../../hooks/useFetch";
import virusLightBlue from '../../../img/icons/covid-defult.svg';
import virusRed from '../../../img/icons/covid-red.svg';
import virusGreen from '../../../img/icons/covid-green.svg';
import virusBlue from '../../../img/icons/covid-blue.svg';
import virusOrange from '../../../img/icons/covid-orange.svg';
import virusDarkRed from '../../../img/icons/covid-redark.svg';

function UnionRectVirus({data}) {
    return (
    <div className='unionRectVirusContainer'>
        <CasesConter theme="themeBlue" label="Total Cases" image={virusLightBlue} number={data?.cases} />
        <CasesConter theme="themeRed" label="Total Death" image={virusRed} number={data?.deaths} />
        <CasesConter theme="themeGreen" label="Total Recovered" image={virusGreen} number={data?.recovered} />
        <CasesConter theme="themeLightBlue" label="Total Active" image ={virusBlue} number={data?.active} />
        <CasesConter theme="themeOrange" label="New Cases" image={virusOrange} number={data?.cases} />
        <CasesConter theme="themeDarkRed" label="New Death" image={virusDarkRed}  number={data?.deaths} />
    </div>
  )
}

export default UnionRectVirus;