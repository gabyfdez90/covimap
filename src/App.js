import React from "react";
import "././components/atoms/footer/footer.css";
import "./components/molecules/landingContent6/landingContent6.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CasesBox from "./components/atoms/casesBox/CasesBox";

function App() {
  return (
    <div className="App">
      <CasesBox
        colorBg={"yellow"}
        label={"Casess"}
        numberToday={0}
        numberTotal={11111111}
        colorTx={"red"}
      />
    </div>
  );
}

export default App;
