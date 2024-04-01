import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import cart from "./assets/cart.png";
import classes from "./CartWidget.module.css";

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    return (
        <Link to="/cart" className={classes.carrito}>
            <img src={cart} />
            <span>{totalQuantity}</span>
        </Link>
    );
};

export default CartWidget;
