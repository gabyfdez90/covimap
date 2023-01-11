import React from 'react'
import IconsLanding from '../../atoms/iconsLanding/IconsLanding';
import lock from '../../../img/icons/iconsLanding/lock_icon.svg';
import upload from '../../../img/icons/iconsLanding/upload_icon.svg';
import crown from '../../../img/icons/iconsLanding/crown_icon.png';
import heart from '../../../img/icons/iconsLanding/heart_icon.svg';

function LandingContent3() {
  return (
    <div>
    <IconsLanding icon={lock} number={"403"} text={"STARTUPS"}/>
    <IconsLanding icon={upload} number={"120+"} text={"MEMBERS"}/>
    <IconsLanding icon={crown} number={"22M"} text={"REVENUE"}/>
    <IconsLanding icon={heart} number={"5643"} text={"DOWNLOADS"}/>
    </div>
  )
}

export default LandingContent3