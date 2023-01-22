import React from 'react';
import '../rectVirus/rectVirus.css'



function CasesConter({theme, label,number, image}) {
    return(
        <div id='casesConterContainer' className={theme}>
            <div className='casesConterText'>{label='Total cases'}
            <span className='casesConterNumber'>{number=41302440}</span>
            </div>
            <img className='covidBlue' src={image}/>
        </div>
    )
   
}
        
    


export default CasesConter;

