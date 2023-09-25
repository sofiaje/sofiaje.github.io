import classes from "./info.module.scss"
import { NavLink } from "react-router-dom";
import { motion as m } from "framer-motion";
import { useOutletContext } from "react-router-dom";


const Info = () => {
    let { firstPageInfo } = useOutletContext();

    return (
        <>
            <section id={classes.info}>
                <div className="contentWrapper px1 py1">
                    <div className={classes.flexHero}>
                        <div>
                            <div>
                                <m.h1 className={classes.heroHeading} initial={{opacity: 0, y: -200}} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: "easeOut" }}>Frontend Developer</m.h1>
                                <m.p className={classes.heroText} initial={{opacity: 0, y: -100}} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: "easeOut" }}>Kreativ och nyfiken student med känsla för färg och form. Går just nu mitt andra år på Frontend programmet på Nackademin i Stockholm.</m.p>
                            </div>
                            <div className={classes.btnContainer}>
                                <NavLink className="primaryBtn btn" to="/contact">Contact me</NavLink>
                                <NavLink className="btn heroBtn" to="/projects">Portfolio</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py1">
                <div className={classes.flexWrapper}>
                    {firstPageInfo.map(info => (
                        <m.div initial={{ y: 50}} whileInView={{ y: 0}} transition={{ duration: 0.75, ease: "easeOut" }}>
                            <h3>{info.title} </h3>
                            <p>{info.body}</p>
                        </m.div>
                    ))}
                </div>
            </section >
        </>
    );
}

export default Info;