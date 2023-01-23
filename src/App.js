import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Tracker2 from "./pages/Tracker/tracker2/Tracker2";
import Tracker4 from "./pages/Tracker/tracker4/Tracker4";
import Tracker5 from "./pages/Tracker/tracker5/Tracker5";
import Tracker6 from "./pages/Tracker/tracker6/Tracker6";
import Tracker7 from "./pages/Tracker/tracker7/Tracker7";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className = "App">
    <Router>
      <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="tracker2" element ={<Tracker2/>}/>
      <Route path="tracker4" element ={<Tracker4/>}/>
      <Route path="tracker5" element ={<Tracker5/>}/>
      <Route path="tracker6" element ={<Tracker6/>}/>
      <Route path="tracker7" element ={<Tracker7/>}/></Routes>
    
    </Router>
    </div>
  );
}

export default App;





/*import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Tracker6 from "./pages/Tracker/tracker6/Tracker6";
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from "./applications/Router";
function App() {
  return (
    <div className="App">
      <Router>
      <Home />
      </Router>
    </div>
  );
}

export default App; 
*/
