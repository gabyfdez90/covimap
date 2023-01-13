import React from 'react'
import IconsLanding from '../../atoms/iconsLanding/IconsLanding';
import lock from '../../../img/icons/iconsLanding/lock_icon.svg';
import upload from '../../../img/icons/iconsLanding/upload_icon.svg';
import money from '../../../img/icons/iconsLanding/money-icon.svg';
import heart from '../../../img/icons/iconsLanding/heart_icon.svg';
import phone from "../../../img/phone-2.png"
import "../landingContent3/landingContent3.css"

function LandingContent3() {
  return (
    <div className='landingContent3Container sm xl'>
        <div className='landingContent3Story'>
            <img className='landingContent3Phone' src= {phone} alt="phone statistics app"></img>
            <div className='landingContent3StoryText'>
                <h2 className='landingContent3StoryTitle'>Stay Home, And <br />Prayer For Victim</h2>
                <p> 
                Human coronaviruses are common and are typically <br/>
                associated with a mild illnesses, similar to the common cold.<br/>
                </p>
                <p>
                Shortness of breath can be a third -- and very serious--<br/>
                manifestation of Covid-19, and it can occur on its own,<br/>
                without a cough.
                </p>
            </div>
        </div>
        <div className='landingContent3Icons'>
            <IconsLanding icon={lock} number={"403"} text={"STARTUPS"}/>
            <IconsLanding icon={upload} number={"120+"} text={"MEMBERS"}/>
            <IconsLanding icon={money} number={"22M"} text={"REVENUE"}/>
            <IconsLanding icon={heart} number={"5643"} text={"DOWNLOADS"}/>
        </div>
    </div>
  )
}

export default LandingContent3