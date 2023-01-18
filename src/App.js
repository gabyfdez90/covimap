import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TopCountry from "./services/ConsumoApi";

function App() {
  return (
    <div className="App">
      <Router>
        <TopCountry />
      </Router>
    </div>
  );
}

export default App;
