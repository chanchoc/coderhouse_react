import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import classes from "./ItemDetail.module.css";

const ItemDetail = ({ id, name, price, img, description, stock }) => {
    const [quantity, setQuantity] = useState(0);
    const { addItem } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        const productToAdd = { id, name, price, quantity, img };

        setQuantity(quantity);
        addItem(productToAdd);
    };

    return (
        <div className={classes.productMainGrid}>
            <div className={classes.product_imgs}>
                <img src={img} alt={name} />
            </div>
            <div className={classes.product_descr}>
                <div className={classes.titles}>
                    <h1>{name}</h1>
                    <h2>${price ? price.toLocaleString() : price}</h2>
                </div>
                <p>{description}</p>
                {quantity === 0 ? (
                    <ItemCount stock={stock} onAdd={handleOnAdd} />
                ) : (
                    <Link to="/cart">
                        <button className={classes.to_cart}>Ir al Carrito</button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default ItemDetail;
