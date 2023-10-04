import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/Navbar/NavBar";

function App() {
    return (
    <div className="App">
      <NavBar />
      <ItemListContainer greetEng="Bienvenido a Ginna Shop"/>
      </div>
    );
};
export default App;