import classes from "../components/project/project.module.scss"
import { motion as m } from "framer-motion";



const ProjectCard = ({ project }) => {
    const { name, image, tech, webpage, github } = project

    return ( 
        <m.div className={classes.projectcard} initial={{ y: 60 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, ease: "easeInOut" }}>
            <img src={image} alt="" />
            <div className="grow">
                <h3>{name}</h3>
                <div className={classes.techContainer}>
                    {tech?.map((x, i) => {
                        return <span key={i} className={classes.technologies}>{x}</span>
                    })}
                </div>

            </div>
            <div className={classes.linkContainer}>
                {webpage && <a href={webpage}>Watch live</a>}
                {github && <a href={github}>View the code</a>}
            </div>
        </m.div>
     );
}
 
export default ProjectCard;