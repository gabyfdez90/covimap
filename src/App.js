import React from "react";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CasesConter from "./components/atoms/tracker/rectVirus/RectVirus";


function App() {
  return (
    <BrowserRouter> 
    <div className="App">
    <CasesConter/>

    </div>
    </BrowserRouter>
  );
}

export default App;
