import React from 'react';
import '../rectVirus/rectVirus.css'
import covidBlue from '../../../../img/icons/covid-blue.svg';


function CasesConter({theme, label,number}) {
    return(
        <div id='casesConterContainer' className={theme}>
            <div className='casesConterText'>{label='Total cases'}
            <span><img className='covidBlue' src={covidBlue} /></span>
            </div>
            <div className='casesConterNumber'>{number=41302440}</div>
            
            

        </div>
    )
   
}
        
    


export default CasesConter;
