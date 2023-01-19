import React from 'react'
import './casesBox.css'

function CasesBox({theme, label, numberToday, numberTotal}) {
  return (
    <div id='casesBoxContainer' className={theme}>
        <span className='casesBoxText'>{label="Cases"}</span>
        <span className='casesBoxTodayNumber'>{numberToday=0}</span>
        <span id='casesBoxTotalNumber' className={theme}>{numberTotal=374111176}</span>
    </div>
  )
}


export default CasesBox