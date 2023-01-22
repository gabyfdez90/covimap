import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Tracker2 from "../../pages/Tracker/tracker2/Tracker2";
import Tracker3 from "../../pages/Tracker/tracker3/Tracker3";
import Tracker4 from "../../pages/Tracker/tracker4/Tracker4";
import Tracker5 from "../../src/pages/Tracker/tracker5";
import Tracker6 from "../../src/pages/Tracker/tracker6";
import Tracker7 from "../../pages/Tracker/tracker7/Tracker7";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/tracker1" component={Tracker1} />
        <Route path="/tracker2" component={Tracker2} />
        <Route path="/tracker3" component={Tracker3} />
        <Route path="/tracker4" component={Tracker4} />
        <Route path="/tracker5" component={Tracker5} />
        <Route path="/tracker6" component={Tracker6} />
        <Route path="/tracker7" component={Tracker7} />
      </Switch>
    </Router>
  );
};

export default Routes;
