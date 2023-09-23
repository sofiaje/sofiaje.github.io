import { NavLink } from "react-router-dom";
import { motion as m } from "framer-motion";
import classes from "./info.module.scss"

const Info = () => {
    return (
        <>

            <section id={classes.info}>
                <div className="contentWrapper">
                    <div className={classes.flexHero}>
                        <div>
                            <m.div>
                                <m.h1 className={classes.heroHeading} initial={{opacity: 0, y: -200}} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: "easeOut" }}>Frontend Developer</m.h1>
                                <m.p className={classes.heroText} initial={{opacity: 0, y: -100}} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: "easeOut" }}>Kreativ och nyfiken student med känsla för färg och form. Går just nu mitt andra år på Frontend programmet på Nackademin i Stockholm.</m.p>
                            </m.div>
                            <div className={classes.btnContainer}>
                                <NavLink className="primaryBtn btn" to="/contact">Contact me</NavLink>
                                <NavLink className="btn heroBtn" to="/projects">Portfolio</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                
                <div className={classes.flexWrapper}>
                    <m.div initial={{ y: 50}} whileInView={{ y: 0}} transition={{ duration: 0.75, ease: "easeOut" }}>
                        <h3>Om mig</h3>
                        <p>En positiv, ansvarstagande och nyfiken människa med ett stort intresse för kommunikation och problemlösning.</p>
                    </m.div>

                    <m.div initial={{ y: 50 }} whileInView={{ y: 0}} transition={{ duration: 0.75, ease: "easeOut" }}>
                        <h3>Intresset</h3>
                        <p>Mitt intresse för kod startade i början av 2000-talet med olika sociala communitys där man hade egna sidor att jobba med. Verktygen var då ganska begränsande men det fanns en utmaning i det som lockade mig.</p>
                    </m.div>

                    <m.div initial={{ y: 50 }} whileInView={{ y: 0}} transition={{ duration: 0.75, ease: "easeOut" }}>
                        <h3>Varför kod?</h3>
                        <p>Jag uppskattar det direkta i kodskrivandet - att resultaten kommer snabbt men också att det finns hundra sätt att skriva en kod på, man får göra sin egen grej!</p>
                    </m.div>
                </div>
            </section >
        </>
    );
}

export default Info;