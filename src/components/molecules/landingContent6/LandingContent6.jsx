import React from 'react';
import blog1 from '../../../img/blog1.jpg';
import blog2 from '../../../img/blog2.jpg';
import blog3 from '../../../img/blog3.jpg';

function LandingContent6() {
    return (
        <div className='molecula'>
            
            <div className="containerLanding">
                <div className="row align-items-center" >
                    <img className='covid'src={blog1} style={{ width: '10%' }} /> <h3 id='text'>Can COVID-19 be caught from a person who has no symptoms?</h3>
                </div>
                <div className="row align-items-center">
                <img className='mascarilla'src={blog2} style={{ width: '10%' }} /><h3 id='text'>What you need to know About Novel Corona Virus Covid 19</h3>
                </div>
                <div className="row align-items-center" >
                <img className='resultado'src={blog3} style={{ width: '10%' }} /><h3 id='text'>What can I do to protect myself and prevent the spread of disease?</h3>
                </div>
            </div>
        </div>
    )
  }
  

export default LandingContent6;

