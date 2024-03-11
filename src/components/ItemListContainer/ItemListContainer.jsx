import { useState, useEffect } from "react";
import { getProducts, getProductByCategory } from "../asyncMock";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import classes from "./ItemListContainer.module.css";

const ItemListContainer = ({ web }) => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const asyncFunction = categoryId ? getProductByCategory : getProducts;

        asyncFunction(categoryId)
            .then((result) => {
                setProducts(result);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [categoryId]);

    return (
        <main className={classes.main}>
            {web ? <h1>Bienvenidos a {web}!</h1> : <h1>{categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}</h1>}
            <ItemList products={products} />
        </main>
    );
};

export default ItemListContainer;
