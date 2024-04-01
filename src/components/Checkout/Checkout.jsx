import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import classes from "./Checkout.module.css";
import { getDocs, collection, query, where, documentId, writeBatch, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { Link } from "react-router-dom";

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState(null);
    const [outOfStock, setoutOfStock] = useState([]);
    const { cart, totalAmount, clearCart } = useContext(CartContext);

    const createOrder = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const objOrder = {
                buyer: {
                    name: e.target.name.value,
                    email: e.target.email.value,
                    phone: e.target.phone.value,
                },
                items: cart,
                total: totalAmount,
                date: Timestamp.fromDate(new Date()),
            };
            const batch = writeBatch(db);
            const outOfStock = [];
            const ids = cart.map((product) => {
                return product.id;
            });
            const productsCollection = query(collection(db, "products"), where(documentId(), "in", ids));
            const querySnapshot = await getDocs(productsCollection);
            const { docs } = querySnapshot;

            docs.forEach((doc) => {
                const data = doc.data();
                const stockDb = data.stock;
                const productQuantity = cart.find((product) => product.id === doc.id).quantity;

                if (stockDb >= productQuantity) {
                    batch.update(doc.ref, { stock: stockDb - productQuantity });
                } else {
                    outOfStock.push({ id: doc.id, ...data });
                }
            });

            if (outOfStock.length === 0) {
                batch.commit();
                const orderCollection = collection(db, "orders");
                const { id } = await addDoc(orderCollection, objOrder);
                setOrderId(id);
                clearCart();
            } else {
                setoutOfStock(outOfStock);
                clearCart();
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <main className={classes.main}>
                <h1>Checkout</h1>
                <h2 className={classes.loading}>Su orden esta siendo procesada...</h2>
            </main>
        );
    }

    if (orderId) {
        return (
            <main className={classes.main}>
                <h1>Checkout</h1>
                <div className={classes.order_created}>
                    <h2>Su orden se creo correctamente!</h2>
                    <p>Su ID de seguimiento es: </p>
                    <p>{orderId}</p>
                </div>
            </main>
        );
    }

    if (outOfStock.length > 0) {
        return (
            <main className={classes.main}>
                <h1>Checkout</h1>
                <div className={classes.order_created}>
                    <h2>Su orden contiene {outOfStock.length} producto(s) sin stock!</h2>
                    {outOfStock.map((product) => {
                        return <p key={product.id}>{product.name}</p>;
                    })}
                    <Link to="/">
                        <button className={classes.button} type="submit">
                            Regresar a comprar
                        </button>
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className={classes.main}>
            <h1>Checkout</h1>
            <CheckoutForm createOrder={createOrder} totalAmount={totalAmount} />
        </main>
    );
};

export default Checkout;
