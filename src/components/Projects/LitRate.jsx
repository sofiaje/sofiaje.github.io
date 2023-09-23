import { motion as m } from "framer-motion";

const LitRate = () => {
    return (
        <section>
            <div className="contentWrapper">
                <m.div initial={{ y: 40 }} animate={{ y: 0 }} transition={{ duration: 0.5, ease: "easeInOut" }} >
                    <div className="projectContainer">
                        <div>
                            <m.h3 initial={{ y: 40 }} animate={{ y: 0 }} transition={{ duration: 0.5, ease: "easeInOut" }}>LitRate book app</m.h3>
                            <m.div initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 0.5, ease: "easeInOut" }} >
                                <p>Projekt från kursen Interaktion med CMS</p>
                                <p>Github: <a href="https://github.com/sofiaje/BookApp">kod</a><br /></p>
                            </m.div>
                        </div>
                    </div>
                </m.div>
            </div>
        </section>
    );
}

export default LitRate;