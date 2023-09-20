import { motion as m } from "framer-motion";

const StarWars = () => {
    return ( 
        <div>
            <m.h3 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: "easeInOut" }} >Star Wars Trivia</m.h3>
            <m.div initial={{ y: 100, opacity:0 }} animate={{ y: 0, opacity:1 }} transition={{ duration: 0.5, ease: "easeInOut" }} >
                <p>This project is a Star Wars trivia application that allows users to compare different Star Wars characters and their attributes. </p>
                <p>Github: <a href="https://github.com/sofiaje/star-wars">kod</a><br />
                Visit site: <a href="https://sofiaje.github.io/star-wars/">sofiaje.github.io/star-wars</a></p>
            </m.div>
        </div>
     );
}
 
export default StarWars;