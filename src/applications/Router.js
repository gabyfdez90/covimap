import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Tracker5 from "../../src/pages/Tracker/tracker5"

const Routes = () => {
    return (
      <Router>
        <Switch>
        <Route path="/src/components/pages/Tracker/tracker5/tracker5.jsx" component={Tracker5} />
        </Switch>
      </Router>
    );
  };
  
  export default Routes;