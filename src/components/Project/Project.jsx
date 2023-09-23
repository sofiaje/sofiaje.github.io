import { NavLink, Outlet } from "react-router-dom";
import { motion as m } from "framer-motion";
import classes from "./project.module.scss"
import { useOutletContext } from "react-router-dom";

// images
import star from "./assets/star.png"



const Project = () => {
    let {projects} = useOutletContext();

    return (
        <section id="project">
            <div className="contentWrapper">
                <m.h2 initial={{ y: 10 }} animate={{ y: 0 }} transition={{ duration: 0.5, ease: "easeInOut" }} >Projekt</m.h2>

                <div className={classes.projectContainer}>
                    {projects.map(link => (
                        <NavLink key={link.id} to={`${link.path}`}>
                            <m.div className={classes.projectCard} initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.75, ease: "easeOut" }}>
                                <div className={classes.fakeImage}></div>
                                <div className={classes.projectCardText}>
                                    <h3>{link.name}</h3>
                                    {/* <p>{link.body}</p> */}
                                </div>
                            </m.div>
                        </NavLink>
                    ))}
                </div>
            </div>

        </section>
    );
}

export default Project;