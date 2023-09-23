import { motion as m } from "framer-motion";


const Knuten = () => {


    return (
        <section>
            <div className="contentWrapper">
                {/* <m.div initial={{ y: 40 }} animate={{ y: 0 }} transition={{ duration: 0.5, ease: "easeInOut" }} > */}
                <m.div initial={{ y: 50}} whileInView={{ y: 0}} transition={{ duration: 0.75, ease: "easeOut" }}>


                    <m.h3 initial={{ y: 40 }} animate={{ y: 0 }} transition={{ duration: 0.5, ease: "easeInOut" }} >Knuten keramikverkstad</m.h3>
                    <m.div initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 0.5, ease: "easeInOut" }} >
                        <p>Projekt från kurs i HTML och CSS</p>
                        
                        <p>Github: <a href="https://github.com/sofiaje/project">kod</a><br />
                            Live demo: <a href="https://sofiaje.github.io/project/">sofiaje.github.io/project</a></p>
                            <h3>Tekniker</h3>
                        <p>
                            <span className="technologies">HTML</span>
                            <span className="technologies">CSS</span>
                            <span className="technologies">Flexbox</span>
                        </p>
                    </m.div>
                </m.div>
            </div>
        </section>
    );
}

export default Knuten;