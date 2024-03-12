import { useState } from "react";
import classes from "./ItemCount.module.css";

const ItemCount = ({ stock = 100 }) => {
    const [count, setCount] = useState(1);

    const increment = () => {
        if (count < stock) {
            setCount((prev) => prev + 1);
        }
    };

    const decrement = () => {
        if (count > 1) {
            setCount((prev) => prev - 1);
        }
    };

    return (
        <div className={classes.carrito}>
            <div className={classes.control}>
                <button onClick={decrement}>-1</button>
                <p>{count}</p>
                <button onClick={increment}>+1</button>
            </div>
            <p className={classes.stock}>Solo {stock} producto(s) en stock.</p>
            <button className={classes.add_cart}>Agregar al Carrito</button>
        </div>
    );
};

export default ItemCount;
