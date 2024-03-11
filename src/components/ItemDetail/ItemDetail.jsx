import ItemCount from "../ItemCount/ItemCount";
import classes from "./ItemDetail.module.css";

const ItemDetail = ({ name, price, img, description, stock }) => {
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
                <ItemCount stock={stock} />
            </div>
        </div>
    );
};

export default ItemDetail;
