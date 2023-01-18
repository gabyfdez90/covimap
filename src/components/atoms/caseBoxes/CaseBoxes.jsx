import React from 'react'
import '../caseBoxes/caseBoxes.css'

function CaseBoxes({label, todayNumber, Number }) {
  return (
    <div className='caseBoxesContainer'>
        <span className='caseBoxesLabel'>{label= "Cases"}</span>
        <div className='caseBoxesTodayNumber'>{todayNumber=0}</div>
        <span className='caseBoxesTotalNumber'>{Number=1500}</span>
    </div>
  )
}

export default CaseBoxes