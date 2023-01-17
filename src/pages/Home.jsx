import React from 'react'
import LandingContent3 from '../components/molecules/landingContent3/LandingContent3'
import LandingContent1 from '../components/molecules/landingContent1/LandingContent1'
import LandingContent4 from '../components/molecules/landingContent4/LandingContent4'
import LandingContent5 from '../components/molecules/landingContent5/LandingContent5'
import LandingContent6 from '../components/molecules/landingContent6/LandingContent6'

function Home() {
  return (
    <div>
        <LandingContent1 />
        <LandingContent3 />
        <LandingContent4 />
        <LandingContent5 />
        <LandingContent6 />
    </div>
  )
}

export default Home