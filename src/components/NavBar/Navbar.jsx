import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import logo from "./assets/logo.png";
import classes from "./NavBar.module.css";

const NavBar = () => {
    return (
        <header className={classes.header}>
            <nav className={classes.navbar}>
                <Link to="/" className={classes.logo}>
                    <img src={logo} alt="Rowa Bags" loading="lazy" />
                </Link>
                <ul className={classes.navbar_links}>
                    <li>
                        <Link to="/category/mochilas">MOCHILAS</Link>
                    </li>
                    <li>
                        <Link to="/category/riñoneras">RIÑONERAS</Link>
                    </li>
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
