import logo from "./assets/logo.png";
import whatsapp from "./assets/whatsapp.png";
import email from "./assets/email.png";
import ubicacion from "./assets/ubicacion.png";
import facebook from "./assets/facebook.png";
import instagram from "./assets/instagram.png";
import classes from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.foot}>
                <img src={logo} alt="Rowa Bags" className={classes.logo} loading="lazy" />
                <div className={classes.contact_links}>
                    <div>
                        <img src={whatsapp} alt="whatsapp" className={classes.contact_img} loading="lazy" />
                        <p className="margin">+549 011-2386-5135</p>
                    </div>
                    <div>
                        <img src={email} alt="email" className={classes.contact_img} loading="lazy" />
                        <p className="margin">hola@rowabags.com.ar</p>
                    </div>
                    <div>
                        <img src={ubicacion} alt="location" className={classes.contact_img} loading="lazy" />
                        <p className="margin">Ayacucho 1480, CABA</p>
                    </div>
                </div>
                <div className={classes.social}>
                    <a href="">
                        <img src={facebook} alt="facebook" className="margin" loading="lazy" />
                    </a>
                    <a href="">
                        <img src={instagram} alt="instagram" className="margin" loading="lazy" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
