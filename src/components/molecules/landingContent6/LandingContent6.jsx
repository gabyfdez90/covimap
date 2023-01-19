import React from 'react';
import blog1 from '../../../img/blog1.jpg';
import blog2 from '../../../img/blog2.jpg';
import blog3 from '../../../img/blog3.jpg';
import {SlClock} from "react-icons/sl";
import {BiMessage} from "react-icons/bi";



function LandingContent6() {
    return (
        <div className='molecula'>
                    
            <div class="containerLanding6 ">
                
                    <div class="col-6">
                        <img className='covid'src={blog1} style={{ width: '20%' }} />
                        <p><SlClock/> 9 Sept 2020 <spam><BiMessage id='icon'/> 21 Comment</spam><spam><a id='enlace' href="#Continue">Continue</a></spam></p>
                        <h4>Can COVID-19 be caught from a person who has no symptoms?</h4>
                    </div>
                    <div class="col-6">
                        <img className='mascarilla'src={blog2} style={{ width: '20%' }} />
                        <p><SlClock/> 9 Sept 2020 <spam><BiMessage id='icon'/> 21 Comment</spam><spam><a id='enlace' href="#Continue">Continue</a></spam></p>
                        <h4>What you need to know About Novel Corona Virus Covid 19</h4>
                    </div>
                    <div class="col-6">
                        <img className='resultado'src={blog3} style={{ width: '20%' }} />
                        <p><SlClock/> 9 Sept 2020 <spam><BiMessage id='icon'/> 21 Comment</spam><spam><a id='enlace' href="#Continue">Continue</a></spam></p>
                        <h4>What can I do to protect myself and prevent the spread of disease?</h4>
                    </div>
                
            </div>
        </div>
    )
  }
  

export default LandingContent6;


