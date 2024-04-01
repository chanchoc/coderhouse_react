import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartListContainer from "./components/CartListContainer/CartListContainer";
import Checkout from "./components/Checkout/Checkout";

function App() {
    return (
        <>
            <CartProvider>
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<ItemListContainer web="Rowa Bags" />} />
                        <Route path="/category/:categoryId" element={<ItemListContainer />} />
                        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                        <Route path="/cart" element={<CartListContainer />} />
                        <Route path="/checkout" element={<Checkout />} />
                    </Routes>
                </BrowserRouter>
            </CartProvider>
            <Footer />
        </>
    );
}

export default App;
