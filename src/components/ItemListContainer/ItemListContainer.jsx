import { getProducts } from "../../services/firebase/firestore/products";
import { useAsync } from "../../hooks/useAsync";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import classes from "./ItemListContainer.module.css";

const ItemListContainer = ({ web }) => {
    const { categoryId } = useParams();
    const asyncFunction = () => getProducts(categoryId);
    const { data: products, error, loading } = useAsync(asyncFunction, [categoryId]);

    if (loading) {
        return (
            <main className={classes.main}>
                <h2>Cargando listado de productos...</h2>
            </main>
        );
    }

    if (error) {
        return (
            <main className={classes.main}>
                <h2>Hubo un error en la carga de los productos!</h2>
            </main>
        );
    }

    return (
        <main className={classes.main}>
            {web ? <h1>Bienvenidos a {web}!</h1> : <h1>{categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}</h1>}
            <ItemList products={products} />
        </main>
    );
};

export default ItemListContainer;
