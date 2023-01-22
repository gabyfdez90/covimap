import React from "react";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CasesConter from "./components/atoms/tracker/rectVirus/RectVirus";
import UnionRectVirus from "./components/molecules/trackerUnionRectVirus/UnionRectVirus";

function App() {
  return (
   
    <div className="App">
    
    <UnionRectVirus/>
    </div>
    
  );
}

export default App;
