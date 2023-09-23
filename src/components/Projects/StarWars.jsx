import { motion as m } from "framer-motion";
import star from "../Project/assets/star.png"


const StarWars = () => {
    return (
        <section>
            <div className="contentWrapper">
                <m.div initial={{ y: 40 }} animate={{ y: 0 }} transition={{ duration: 0.5, ease: "easeInOut" }} >

                    <div className="projectContainer">
                        <img className="img" src={star} alt="" />
                        <div>
                            <m.h3 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: "easeInOut" }} >Star Wars Trivia</m.h3>
                            <m.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: "easeInOut" }} >
                                <p>Ett Star Wars projekt som tillåter användaren att jämnföra olika karaktärer från filmerna. Projektet använder SWAPI, ett något långsamt Star Wars Trivia API.</p>
                                <p>Github: <a href="https://github.com/sofiaje/star-wars">kod</a><br />
                                    Live demo: <a href="https://sofiaje.github.io/star-wars/">sofiaje.github.io/star-wars</a></p>
                            </m.div>
                        </div>
                    </div>
                </m.div>
            </div>
        </section>
    );
}

export default StarWars;