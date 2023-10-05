import classes from "./contact.module.scss"

import { motion as m } from "framer-motion";

const Contact = () => {
    return ( 
        <section id="contact">
            <div className={classes.wrapper}>
                <div className="contentWrapper">
                    <m.h2 initial={{ y: 40}} animate={{ y: 0}} transition={{ duration: 0.5, ease: "easeInOut" }} >Kontakt</m.h2>
                    <m.p initial={{ y: 40 }} animate={{ y: 0 }} transition={{ duration: 0.5, ease: "easeInOut" }} >
                        Är du nyfiken på vem jag är och vill veta mer? Har du en idé som du vill ha hjälp att realisera? Tveka inte att ta kontakt med mig via <a href="mailto:sofia.jespersen@hotmail.com">sofia.jespersen@hotmail.com</a>
                    </m.p>
                </div>
            </div>
        </section>
     );
}
 
export default Contact;