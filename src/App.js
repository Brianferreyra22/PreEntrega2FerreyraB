import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
         <Routes>
            <Route path="/" element={<ItemListContainer greetEng="Bienvenido a Ginna Shop"/>}/>
            <Route path="/category/:categoryId" element={<ItemListContainer greetEng="Bienvenido a Ginna Shop"/>}/>
            <Route path="/item/:id" element={<itemDetailContainer/>}/>
          </Routes>
      </BrowserRouter>
      </div>
    );  
};
export default App;