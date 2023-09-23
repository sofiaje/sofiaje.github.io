import { motion as m } from "framer-motion";

const Knuten = () => {
    return (
        <section>
            <div className="contentWrapper">
                <m.div initial={{ y: 40 }} animate={{ y: 0 }} transition={{ duration: 0.5, ease: "easeInOut" }} >

                    <m.h3 initial={{ y: 40 }} animate={{ y: 0 }} transition={{ duration: 0.5, ease: "easeInOut" }} >Knuten keramikverkstad</m.h3>
                    <m.div initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 0.5, ease: "easeInOut" }} >
                        <p>Projekt från kurs i HTML och CSS</p>
                        <p>Github: <a href="https://github.com/sofiaje/project">kod</a><br />
                            Live demo: <a href="https://sofiaje.github.io/project/">sofiaje.github.io/project</a></p>
                    </m.div>
                </m.div>
            </div>
        </section>
    );
}

export default Knuten;