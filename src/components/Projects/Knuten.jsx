import { motion as m } from "framer-motion";

const Knuten = () => {
    return ( 
        <div>
            <m.h3 initial={{ y: 40, opacity:0 }} animate={{ y: 0, opacity:1 }} transition={{ duration: 0.5, ease: "easeInOut" }} >Knuten keramikverkstad</m.h3>
            <m.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: "easeInOut" }} >
                <p>Projekt från kurs i HTML och CSS</p>
                <p>Github: <a href="https://github.com/sofiaje/project">kod</a><br />
                Visit site: <a href="https://sofiaje.github.io/project/">sofiaje.github.io/project</a></p>
            </m.div>
        </div>
     );
}
 
export default Knuten;