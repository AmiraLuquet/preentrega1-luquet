
import './App.css';
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import NavBar from "./componentes/NavBar/NavBar"
import image from "../src/zapatillas.png"

const stilo = {
 marginLeft: "35%",
}

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer/>
    <div>
      <img src={image} style={stilo}/>
    </div>
    </>
  );
}

export default App;
