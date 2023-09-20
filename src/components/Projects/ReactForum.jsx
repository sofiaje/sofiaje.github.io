import { motion as m } from "framer-motion";

const ReactForum = () => {
    return ( 
        <div>
            <m.h3 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: "easeInOut" }}>React forum</m.h3>
            <m.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: "easeInOut" }} >
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, rem.</p>
                <p>Github: <a href="https://github.com/sofiaje/forum">kod</a></p>
            </m.div>

        </div>
     );
}
 
export default ReactForum;