import { motion as m } from "framer-motion";

const ReactForum = () => {
    return (
        <section>
            <div className="contentWrapper">
                <m.div initial={{ y: 40 }} animate={{ y: 0 }} transition={{ duration: 0.5, ease: "easeInOut" }} >

                    <div>
                        <m.h3 initial={{ y: 40 }} animate={{ y: 0 }} transition={{ duration: 0.5, ease: "easeInOut" }}>React forum</m.h3>
                        <m.div initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 0.5, ease: "easeInOut" }} >
                            <p>Ett av mina första små React projekt.</p>
                            <p>Github: <a href="https://github.com/sofiaje/forum">kod</a></p>
                        </m.div>

                    </div>
                </m.div>
            </div>
        </section>
    );
}

export default ReactForum;