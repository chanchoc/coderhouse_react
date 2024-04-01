import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartList from "../CartList/CartList";
import classes from "./CartListContainer.module.css";

const CartDetailContainer = () => {
    const { cart, totalAmount } = useContext(CartContext);

    return (
        <main className={classes.main}>
            <h1>Carrito de Compras</h1>
            {cart.length > 0 ? (
                <>
                    <CartList />
                    <div className={classes.cart_total}>
                        <h2>TOTAL: ${totalAmount.toLocaleString()}</h2>
                        <Link to="/checkout">
                            <button className={classes.button}>Checkout</button>
                        </Link>
                    </div>
                </>
            ) : (
                <div className={classes.no_products}>
                    <h2>Aún no tienes productos cargados...</h2>
                    <Link to="/">
                        <button className={classes.button}>Seguir Comprando</button>
                    </Link>
                </div>
            )}
        </main>
    );
};

export default CartDetailContainer;
