import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/Context/CartContext";
import Cart from "./components/Cart/Cart";

function App() {
    return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer greetEng="Bienvenido a Ginna Shop"/>}/>
            <Route path="/category/:categoryId" element={<ItemListContainer greetEng="Bienvenido a Ginna Shop"/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
      </div>
    );  
};
export default App;