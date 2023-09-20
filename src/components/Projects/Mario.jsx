import { motion as m } from "framer-motion";

const Mario = () => {
    return ( 
        <div>
            <m.h3 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: "easeInOut" }}>Mario</m.h3>
            <m.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: "easeInOut" }} >
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, nemo aperiam ab perferendis fugit deleniti?</p>
                <p>Github: <a href="https://github.com/sofiaje/Mario">kod</a><br />
                Visit site: <a href="https://sofiaje.github.io/Mario">sofiaje.github.io/mario</a></p>
            </m.div>
        </div>
     );
}
 
export default Mario;