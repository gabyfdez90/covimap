import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../pages/Home";
import Tracker2 from "../pages/Tracker/tracker2/Tracker2";
import Tracker4 from "../pages/Tracker/tracker4/Tracker4";
import Tracker5 from "../pages/Tracker/tracker5/Tracker5";
import Tracker6 from "../pages/Tracker/tracker6/Tracker6";

const Routes = () => {
  return (
    <Router>
           <Route path="/" element ={<Home/>}/>
           <Route path="/tracker2" component={Tracker2} />
           <Route path='/tracker6' component={Tracker6} />
           <Route path="/tracker4" component={Tracker4} />
          <Route path="/tracker5" component={Tracker5} />
          <Route path="/tracker5" component={Tracker5} />
    </Router>
  );
};

export default Routes;
