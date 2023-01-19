import React from 'react'
import './casesBox.css'

function CasesBox({theme, label, numberToday, numberTotal}) {
  return (
    
    <div id='casesBoxContainer' className={theme}>
        <span className='casesBoxText'>{label}</span>
        <span className='casesBoxTodayNumber'>{numberToday}</span>
        <span id='casesBoxTotalNumber' className={theme}>{numberTotal}</span>
    </div>
  )
}


export default CasesBox