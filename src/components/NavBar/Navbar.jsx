import logo from "./assets/logo.png";
import CartWidget from "../CartWidget/CartWidget";
import classes from "./NavBar.module.css";

const NavBar = () => {
    return (
        <header className={classes.header}>
            <nav className={classes.navbar}>
                <a href="" className={classes.logo}>
                    <img src={logo} alt="Rowa Bags" loading="lazy" />
                </a>
                <ul className={classes.navbar_links}>
                    <li>
                        <a href="">MOCHILAS</a>
                    </li>
                    <li>
                        <a href="">RIÑONERAS</a>
                    </li>
                    <li>
                        <a href="">SOBRE ROWA</a>
                    </li>
                    <li>
                        <a href="">CONTACTO</a>
                    </li>
                    <li>
                        <a href="">LOG IN</a>
                    </li>
                    <li>
                        <CartWidget cartProducts={2} />
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;
