import React from 'react';
import CardsTemplate from '../../templates/CardsTemplate';
import "../landingContent2/landingContent2.css"

function LandingContent2() {
  return (
    <div className='d-flex flex-column align-items-center landingContent3Container'>
      <div className='landingContent3Text'>
        <h5 className="text-center">App Feature</h5>
        <h1 className="text-center">Basic Feature You Will Get <br/> When You Use</h1>
      </div>
      <div className='mx-auto landingContent3Carousel'>
          <CardsTemplate/>
      </div>
    </div>
  )
}
  
  export default LandingContent2