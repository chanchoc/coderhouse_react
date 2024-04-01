import { useState } from "react";
import classes from "./ItemCount.module.css";

const ItemCount = ({ initialValue = 1, stock = 100, onAdd }) => {
    const [count, setCount] = useState(initialValue);

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
            <button className={classes.add_cart} onClick={() => onAdd(count)}>
                Agregar al Carrito
            </button>
        </div>
    );
};

export default ItemCount;
