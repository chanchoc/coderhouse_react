import classes from "./CheckoutForm.module.css";

const CheckoutForm = ({ createOrder, totalAmount }) => {
    return (
        <form className={classes.form} onSubmit={createOrder}>
            <label htmlFor="name" className={classes.form_label}>
                Nombre completo
            </label>
            <input
                className={classes.input}
                type="text"
                name="name"
                placeholder="Escribe tu nombre"
                id="name"
                required
            />
            <label htmlFor="email" className={classes.form_label}>
                Email
            </label>
            <input
                className={classes.input}
                type="text"
                name="email"
                placeholder="example@gmail.com"
                id="email"
                required
            />
            <label htmlFor="phone" className={classes.form_label}>
                Teléfono
            </label>
            <input
                className={classes.input}
                type="text"
                name="phone"
                placeholder="Escribe tu teléfono"
                id="phone"
                required
            />
            <div className={classes.form_final}>
                <h2>TOTAL: ${totalAmount.toLocaleString()}</h2>
                <button className={classes.button} type="submit">
                    Finalizar Compra
                </button>
            </div>
        </form>
    );
};

export default CheckoutForm;
