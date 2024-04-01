import { useState, useEffect } from "react";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import classes from "./ItemListContainer.module.css";

const ItemListContainer = ({ web }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);
        const productsCollection = categoryId
            ? query(collection(db, "products"), where("category", "==", categoryId), where("stock", ">=", 1))
            : query(collection(db, "products"), where("stock", ">=", 1));

        getDocs(productsCollection)
            .then((querySnapshot) => {
                const productsAdapted = querySnapshot.docs.map((doc) => {
                    const data = doc.data();
                    return { id: doc.id, ...data };
                });
                setProducts(productsAdapted);
            })
            .catch((error) => console.log(error))
            .finally(() => {
                setLoading(false);
            });
    }, [categoryId]);

    if (loading) {
        return (
            <main className={classes.main}>
                <h2>Cargando listado de productos...</h2>
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
