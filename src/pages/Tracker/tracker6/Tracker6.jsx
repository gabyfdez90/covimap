import React from 'react'
import TrackerCardsCountries from '../../../components/molecules/trackerCardsCountries/TrackerCardsCountries'
import TrackerLayout from '../../../components/templates/trackerLayout/TrackerLayout'
import '../tracker6/tracker6.css'

function Tracker6() {
  return (
    <div className='tracker6Container'>
        <div className='trackerLayout'>
            <TrackerLayout />
        </div>
        <div className='trackerCards'>
            <TrackerCardsCountries />
        </div>
    </div>
  )
}

export default Tracker6