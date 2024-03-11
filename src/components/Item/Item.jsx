import { Link } from "react-router-dom";
import classes from "./Item.module.css";

const Item = ({ id, name, img, price }) => {
    return (
        <Link className={classes.item_link} to={`/item/${id}`}>
            <div className={classes.product}>
                <img src={img} />
                <h2>{name}</h2>
                <h3>${price.toLocaleString()}</h3>
            </div>
        </Link>
    );
};

export default Item;
