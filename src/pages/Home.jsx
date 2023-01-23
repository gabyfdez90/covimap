import React from "react";
import LandingContent1 from "../components/molecules/landingContent1/LandingContent1";
import LandingContent2 from "../components/molecules/landingContent2/LandingContent2";
import LandingContent3 from "../components/molecules/landingContent3/LandingContent3";
import LandingContent4 from "../components/molecules/landingContent4/LandingContent4";
import LandingContent5 from "../components/molecules/landingContent5/LandingContent5";
import LandingContent6 from "../components/molecules/landingContent6/LandingContent6";
import Navbar from "../components/atoms/navbar/Navbar";
import Footer from "../components/atoms/footer/Footer";
import Banner from "../components/atoms/banner/Banner";
import "../pages/home.css"

function Home() {
  return (
    <div>
        <Navbar />
        <LandingContent1 />
        <div className="bannerHome">
          <Banner />
        </div>
        <LandingContent2 />
        <LandingContent3 />
        <LandingContent4 />
        <LandingContent5 />
        <LandingContent6 />
        <Footer />
      
    </div>
  );
}

export default Home;
