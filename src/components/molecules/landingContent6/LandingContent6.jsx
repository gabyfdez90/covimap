import React from 'react';
import blog1 from '../../../img/blog1.jpg';
import blog2 from '../../../img/blog2.jpg';
import blog3 from '../../../img/blog3.jpg';

function LandingContent6() {
    return (
        <div className='molecula'>
                    
            <div class="containerLanding6 ">
                
                    <div class="col-6">
                        <img className='covid'src={blog1} style={{ width: '10%' }} />
                        <h3>Can COVID-19 be caught from a person who has no symptoms?</h3>
                    </div>
                    <div class="col-6">
                        <img className='mascarilla'src={blog2} style={{ width: '10%' }} />
                        <h3>What you need to know About Novel Corona Virus Covid 19</h3>
                    </div>
                    <div class="col-6">
                        <img className='resultado'src={blog3} style={{ width: '10%' }} />
                        <h3>What can I do to protect myself and prevent the spread of disease?</h3>
                    </div>
                
            </div>
        </div>
    )
  }
  

export default LandingContent6;

