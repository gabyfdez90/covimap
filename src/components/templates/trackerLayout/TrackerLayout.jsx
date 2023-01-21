import React from 'react'
import SideNavbar from '../../atoms/sideNavbar/SideNavbar'
import TopCountry from '../../atoms/TopCountry/TopCountry'
import ColorBoxesSection from '../../molecules/trackerColorBoxes/ColorBoxesSection'
import './../trackerLayout/trackerLayout.css'

function TrackerLayout({viewTracker}) {
  return (
<div className='trackerLayoutContainer'>
      <div className='SideNavbar'>
        <SideNavbar />
      </div>
      <div className='secondColumnTracker'>
        <div className='ColorBoxesSection'>
          <ColorBoxesSection />
        </div>
        <div className='TopCountry'>
          <TopCountry />
        </div>
      </div> 
      <div className='thirdColumnTracker'>
        {viewTracker}
      </div>
    </div> 
  )
}

export default TrackerLayout