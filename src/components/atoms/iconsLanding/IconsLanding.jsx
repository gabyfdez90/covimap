import React from 'react'
import "../iconsLanding/iconsLanding.css"

function IconsLanding({icon, number, text}) {
  return (
    <div className='iconsLandingContainer'>
      <img src={icon} alt="icon" className='iconsLandingIcon'></img>
      <span className='iconsLandingNumber'>{number}</span>
      <span className='iconsLandingText'>{text}</span>
    </div>
  )
}

export default IconsLanding