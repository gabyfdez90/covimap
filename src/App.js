import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CasesConter from "./components/atoms/tracker/rectVirus/RectVirus";
import UnionRectVirus from "./components/molecules/trackerUnionRectVirus/UnionRectVirus";

function App() {
  return (
    <Router>
      <div className="App">
        <UnionRectVirus />
      </div>
    </Router>
  );
}

export default App;
