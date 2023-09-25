import classes from "./project.module.scss"
import { motion as m } from "framer-motion";
import { useOutletContext, useParams } from "react-router-dom";


const Oneproject = () => {
    let { projects } = useOutletContext();
    let { id } = useParams();
    const { name, body, github, webpage, tech, image, apiAdress } = projects[id]

    return (
        <section>
            <div className="contentWrapper py1 px1">
                {/* <m.div initial={{ y: 40 }} animate={{ y: 0 }} transition={{ duration: 0.5, ease: "easeInOut" }} > */}
                <m.div className="py1" initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.75, ease: "easeOut" }}>

                    {image && <img src={image} className={classes.projectImg}></img>}

                    <m.h3 initial={{ y: 40 }} animate={{ y: 0 }} transition={{ duration: 0.5, ease: "easeInOut" }} >{name}</m.h3>
                    <m.div initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 0.5, ease: "easeInOut" }} >
                        <p>{body}</p>

                        <div className={`py1 ${classes.linkContainer}`}>
                            {webpage && <a href={webpage}>Se live </a>}
                            <a href={github}>Se kod</a>
                            {apiAdress && <a href={apiAdress}>API</a>}
                        </div>
                        <h3>Tekniker</h3>
                        <p className="flex">
                            {tech.map(x => (<span className={classes.technologies} key={x}>{x}</span>))}
                        </p>
                    </m.div>

                </m.div>
            </div>
        </section>
    );
}

export default Oneproject;