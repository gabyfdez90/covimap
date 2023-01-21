import React from 'react';
import '../rectVirus/rectVirus.css'



function CasesConter({theme, label,number}) {
    return(
        <div id='casesConterContainer' className={theme}>
            <div className='casesConterText'>{label}</div>
            <div className='casesConterNumber'>{number}</div>


        </div>
    )
   
}
        
    


export default CasesConter;
