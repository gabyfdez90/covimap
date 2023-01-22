import React from 'react';
import '../rectVirus/rectVirus.css'



function CasesConter({theme, label,number, image}) {
    return(
        <div id='casesConterContainer' className={theme}>
            <div className='casesConterText'>{label}
            <span className='casesConterNumber'>{number}</span>
            </div>
            <img className='virus' src={image}/>
        </div>
    )
   
}
        
    


export default CasesConter;

