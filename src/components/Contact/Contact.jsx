import classes from "./contact.module.scss"

import { motion as m } from "framer-motion";

const Contact = () => {
    return ( 
        <section id="contact">
            <div className="contentWrapper py1 px1 flex">
                <div>
                    <m.h2 initial={{ y: 10}} animate={{ y: 0}} transition={{ duration: 0.5, ease: "easeInOut" }} >Kontakt</m.h2>
                    <m.p initial={{ y: 40 }} animate={{ y: 0 }} transition={{ duration: 0.5, ease: "easeInOut" }} >Är du nyfiken på vem jag är och vill veta mer? Har du en idé som du vill ha hjälp att realisera? Tveka inte att ta kontakt med mig via <a href="mailto:sofia.jespersen@hotmail.com">sofia.jespersen@hotmail.com</a></m.p>

                </div>
                <img src="/assets/blur.png" className={classes.contactImg} alt="" />
            </div>
        </section>
     );
}
 
export default Contact;