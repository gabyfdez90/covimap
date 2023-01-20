import React from "react";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Tracker1 from "./pages/Tracker/tracker1/Tracker1";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Tracker1 />
      </div>
    </BrowserRouter>
  );
}

export default App;
