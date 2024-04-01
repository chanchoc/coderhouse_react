import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import classes from "./CartList.module.css";

const CartList = () => {
    const { cart, removeItem } = useContext(CartContext);

    const handlerRemove = (id) => {
        removeItem(id);
    };

    return (
        <div className={classes.cart_list}>
            {cart.map((product) => {
                return <CartItem key={product.id} {...product} onRemove={handlerRemove} />;
            })}
        </div>
    );
};

export default CartList;
