import React from 'react';
import './landingContent5.css';
import phone from "../../../img/phone-1.png"


function LandingContent5() {
  return (
    <div className='landingContent5Container sm xl'>
        <div className='landingContent5Text'>
          <h2 className='landingContent5Title'>Get the simple app <br /> for latest news</h2>
            <p> 
            Human coronaviruses are common and are typically associated<br/>
            with mild illnesses, similar to the common cold.<br/>
            </p>
            <button>Download now</button>
          <div className='landingContent5Image'>
            <img className='landingContent5Mobile' src= {phone} alt="phone statistics app"></img>
          </div>
        </div>
    </div>
  )
}

export default LandingContent5