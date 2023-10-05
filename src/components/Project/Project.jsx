import classes from "./project.module.scss"
import { motion as m } from "framer-motion";
import ProjectCard from "../../features/ProjectCard";


const Project = ({projects}) => {
    return (
        <section id="project" className={classes.project}>
            <h2>Things i made</h2>
            <div className={classes.projectContainer}>
                {projects.map((project, i) => (
                    <ProjectCard key={i} project={project}/>         
                ))}
            </div>
        </section>
    );
}

export default Project;