import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LandingContent1 from "../components/molecules/landingContent1/LandingContent1"
import LandingContent2 from "../components/molecules/landingContent2/LandingContent2"
import LandingContent3 from "../components/molecules/landingContent3/LandingContent3"
import LandingContent4 from "../components/molecules/landingContent4/LandingContent4"
import LandingContent5 from "../components/molecules/landingContent5/LandingContent5"
import LandingContent6 from "../components/molecules/landingContent6/LandingContent6"
import Banner from "../components/atoms/banner/Banner"
import Navbar from "../components/atoms/navbar/Navbar"

function Home() {
  return (
    <div>
      <Router>
        <Navbar/>
        <LandingContent1/>
        <Banner/>
        <LandingContent2/>
        <LandingContent3/>
        <LandingContent4/>
        <LandingContent5/>
        <LandingContent6/>
      </Router>
    </div>
  )
}

export default Home