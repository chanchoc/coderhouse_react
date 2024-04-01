import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import logo from "./assets/logo.png";
import classes from "./NavBar.module.css";

const NavBar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const categoriesCollection = query(
            collection(db, "categories"),
            orderBy("order", "asc"),
            where("active", "==", true)
        );

        getDocs(categoriesCollection)
            .then((querySnapshot) => {
                const categoriesAdapted = querySnapshot.docs.map((doc) => {
                    const data = doc.data();
                    return { id: doc.id, ...data };
                });
                setCategories(categoriesAdapted);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <header className={classes.header}>
            <nav className={classes.navbar}>
                <Link to="/" className={classes.logo}>
                    <img src={logo} alt="Rowa Bags" loading="lazy" />
                </Link>
                <ul className={classes.navbar_links}>
                    {categories.map((category) => {
                        return (
                            <li key={category.id}>
                                <Link to={`/category/${category.slug}`}>{category.name.toUpperCase()}</Link>
                            </li>
                        );
                    })}
                    <li>
                        <Link to="/">SOBRE ROWA</Link>
                    </li>
                    <li>
                        <Link to="/">CONTACTO</Link>
                    </li>
                    <li>
                        <Link to="/">LOG IN</Link>
                    </li>
                    <li>
                        <CartWidget />
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;
