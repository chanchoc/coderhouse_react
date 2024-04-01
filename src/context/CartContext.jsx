import { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (productToAdd) => {
        if (cart.length > 0) {
            let isAdded = false;
            const products = cart.map((product) => {
                if (productToAdd.id === product.id) {
                    isAdded = true;
                    return {
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        img: product.img,
                        quantity: product.quantity + productToAdd.quantity,
                    };
                }
                return product;
            });
            isAdded ? setCart(products) : setCart([...products, productToAdd]);
        } else {
            setCart((prev) => [...prev, productToAdd]);
        }
    };

    const removeItem = (id) => {
        setCart(cart.filter((product) => product.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

    const getTotalQuantity = () => {
        let accum = 0;

        cart.forEach((product) => {
            accum += product.quantity;
        });

        return accum;
    };

    const getTotalAmount = () => {
        let accum = 0;

        cart.forEach((product) => {
            accum += product.quantity * product.price;
        });

        return accum;
    };

    const totalQuantity = getTotalQuantity();
    const totalAmount = getTotalAmount();

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, totalAmount }}>
            {children}
        </CartContext.Provider>
    );
};
