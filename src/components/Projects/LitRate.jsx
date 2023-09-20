import { motion as m } from "framer-motion";

const LitRate = () => {
    return ( 
        <div>
            <m.h3 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: "easeInOut" }}>LitRate book app</m.h3>
            <m.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: "easeInOut" }} >
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quisquam corporis totam illo minus itaque id suscipit velit beatae molestiae!</p>
                <p>Github: <a href="https://github.com/sofiaje/BookApp">kod</a><br /></p>
            </m.div>
        </div>
     );
}
 
export default LitRate;