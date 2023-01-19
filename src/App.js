import React from "react";
import "././components/atoms/footer/footer.css";
import "./components/molecules/landingContent6/landingContent6.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CasesBox from "./components/atoms/casesBox/CasesBox";

function App() {
  return (
    <div className="App">
      <CasesBox
        label={"Casess"}
        numberToday={0}
        numberTotal={11111111}
        theme={"themeYellow"}
      />
    </div>
  );
}

export default App;
