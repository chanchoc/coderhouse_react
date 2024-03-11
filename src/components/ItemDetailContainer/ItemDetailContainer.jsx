import { useState, useEffect } from "react";
import { getProductById } from "../asyncMock";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import classes from "./ItemDetailContainer.module.css";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { itemId } = useParams();

    useEffect(() => {
        getProductById(itemId)
            .then((response) => {
                setProduct(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [itemId]);

    return (
        <main className={classes.main}>
            <ItemDetail {...product} />
        </main>
    );
};

export default ItemDetailContainer;
