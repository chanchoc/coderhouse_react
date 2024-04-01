import { getProductById } from "../../services/firebase/firestore/products";
import { useAsync } from "../../hooks/useAsync";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import classes from "./ItemDetailContainer.module.css";

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const asyncFunction = () => getProductById(itemId);
    const { data: product, error, loading } = useAsync(asyncFunction, [itemId]);

    if (loading) {
        return (
            <main className={classes.main}>
                <h2>Cargando detalles del productos...</h2>
            </main>
        );
    }

    if (error) {
        return (
            <main className={classes.main}>
                <h2>Hubo un error cargando los detalles del producto!</h2>
            </main>
        );
    }

    return (
        <main className={classes.main}>
            <ItemDetail {...product} />
        </main>
    );
};

export default ItemDetailContainer;
