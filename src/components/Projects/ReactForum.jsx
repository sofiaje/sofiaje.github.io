import { motion as m } from "framer-motion";

const ReactForum = () => {
    return (
        <div>
            <m.h3 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: "easeInOut" }}>React forum</m.h3>
            <m.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: "easeInOut" }} >
                <p>Ett av mina första små React projekt.</p>
                <p>Github: <a href="https://github.com/sofiaje/forum">kod</a></p>
            </m.div>

        </div>
    );
}

export default ReactForum;