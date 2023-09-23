import { NavLink } from "react-router-dom";
import { motion as m } from "framer-motion";
import classes from "./project.module.scss"
import { useOutletContext } from "react-router-dom";

// images
import star from "./assets/star.png"



const Project = () => {
    let { projects } = useOutletContext();

    return (
        <section id="project">
            <div className="contentWrapper">
                <m.h2 initial={{ y: 10 }} animate={{ y: 0 }} transition={{ duration: 0.5, ease: "easeInOut" }} >Projekt</m.h2>

                <div className={classes.projectContainer}>
                    {projects.map(link => (
                        <NavLink key={link.id} to={`/projects/${link.id}`}>
                            <m.div className={classes.projectCard} initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.75, ease: "easeOut" }}>
                                <div className={classes.fakeImage}>
                                    <div className={classes.projectCardText}>
                                        <h3>{link.name}</h3>
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 576 512"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/></svg> */}
                                    </div>

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