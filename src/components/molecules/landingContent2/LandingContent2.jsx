import React from 'react';
import CardsTemplate from '../../templates/CardsTemplate';
import "../landingContent2/landingContent2.css"

function LandingContent2() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-md-10 mx-auto landingContent2Text'>
          <h5 className="text-center">App Feature</h5>
          <h1 className="text-center">Basic Feature You Will Get <br/> When You Use</h1>
          <br/>
        </div>
      </div>
      <div className='row'>
        <div className='col-12 col-md-10 mx-auto landingContent2Carousel'>
            <CardsTemplate/>
        </div>
      </div>
    </div>
  )
}

export default LandingContent2;
