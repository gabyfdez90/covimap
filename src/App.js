import React from "react";
import '././components/atoms/footer/footer.css';
import './components/molecules/landingContent6/landingContent6.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingContent6 from "./components/molecules/landingContent6/LandingContent6";
import Footer from "./components/atoms/footer/Footer";


function App() {
  return (
    <div className="App">
    <LandingContent6/>
    
    <Footer/>   

    </div>
  );
}

export default App;