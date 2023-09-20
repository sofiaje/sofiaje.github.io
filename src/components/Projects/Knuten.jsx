import { motion as m } from "framer-motion";

const Knuten = () => {
    return ( 
        <div>
            <m.h3 initial={{ y: 40, opacity:0 }} animate={{ y: 0, opacity:1 }} transition={{ duration: 0.5, ease: "easeInOut" }} >Knuten keramikverkstad</m.h3>
            <m.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: "easeInOut" }} >
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum hic vero possimus et aspernatur at laudantium numquam, cum nostrum modi, laboriosam illum est deleniti vitae nulla aperiam autem? Sunt fuga dolores, suscipit illum enim omnis libero voluptates dolore.</p>
                <p>Github: <a href="https://github.com/sofiaje/project">kod</a><br />
                Visit site: <a href="https://sofiaje.github.io/project/">sofiaje.github.io/project</a></p>
            </m.div>
        </div>
     );
}
 
export default Knuten;