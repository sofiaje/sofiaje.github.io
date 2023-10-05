import classes from "./info.module.scss"
import { motion as m } from "framer-motion";


const Info = ({firstPageInfo}) => {

    return (
        <>
            <section id={classes.info}>
                <m.h1 className={classes.heroHeading} initial={{opacity: 0, y: -100}} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: "easeOut" }}>Hi, i'm Sofia</m.h1>
                <m.h2 className={classes.heroHeading} initial={{opacity: 0, y: -100}} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: "easeOut" }}>I'm a Frontend Developer</m.h2>
            </section>
            <section className="py1">
                <div className={classes.flexWrapper}>
                    {firstPageInfo.map((info, i) => (
                        <m.div className={classes.card} key={i} initial={{ y: 50}} whileInView={{ y: 0}} transition={{ duration: 0.75, ease: "easeOut" }}>
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