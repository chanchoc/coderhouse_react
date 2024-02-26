import cart from "./assets/cart.png";
import classes from "./CartWidget.module.css";

const CartWidget = ({ cartProducts }) => {
    return (
        <a href="" className={classes.carrito}>
            <img src={cart} />
            <span>{cartProducts}</span>
        </a>
    );
};

export default CartWidget;
