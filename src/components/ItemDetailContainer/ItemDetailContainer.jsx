import { useState, useEffect } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import classes from "./ItemDetailContainer.module.css";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true);
        const productDoc = doc(db, "products", itemId);

        getDoc(productDoc)
            .then((queryDocumentSnapshot) => {
                const data = queryDocumentSnapshot.data();
                const productAdapted = { id: queryDocumentSnapshot.id, ...data };
                setProduct(productAdapted);
            })
            .catch((error) => console.log(error))
            .finally(() => {
                setLoading(false);
            });
    }, [itemId]);

    if (loading) {
        return (
            <main className={classes.main}>
                <h2>Cargando detalles del productos...</h2>
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
