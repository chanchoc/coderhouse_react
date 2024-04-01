import { Link } from "react-router-dom";
import trash from "./assets/trash.png";
import classes from "./CartItem.module.css";

const CartItem = ({ id, name, img, price, quantity, onRemove }) => {
    return (
        <div className={classes.product}>
            <Link to={`/item/${id}`}>
                <img src={img} alt={name} className={classes.product_img} />
            </Link>
            <div className={classes.description}>
                <h3>{name}</h3>
                <h4>${price.toLocaleString()}</h4>
            </div>
            <div className={classes.quantity}>
                <h3>Cantidad:</h3>
                <h4>{quantity}</h4>
            </div>
            <img src={trash} alt="delete" className={classes.trash} onClick={() => onRemove(id)} />
        </div>
    );
};

export default CartItem;
