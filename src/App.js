import ButtonShare from "./components/atoms/buttonShare/ButtonShare";
import Cart from "./components/shareIcons/Untitled.png";
import Headset from "./components/shareIcons/headset-solid 1.png";
import Share from "./components/shareIcons/share-solid 1.png";





function App() {
  return (
    <div className="App">
      <ButtonShare color ="#FE6550" icon={Share}/>
      <ButtonShare color ="#32D9BA" icon={Headset}/>
      <ButtonShare color ="#94BF54" icon={Cart}/>
      
      </div>
    
  );
}

export default App;
