import React from 'react'
import './casesBox.css'

function CasesBox({colorBg, label, numberToday, numberTotal, colorTx}) {
  return (
    <div className='casesBoxContainer' style={{ background: colorBg }}>
        <span className='casesBoxText'>{label="Cases"}</span>
        <span className='casesBoxTodayNumber'>{numberToday=0}</span>
        <span className='casesBoxTotalNumber' style={{ color: colorTx }}>{numberTotal=374111176}</span>
    </div>
  )
}

export default CasesBox