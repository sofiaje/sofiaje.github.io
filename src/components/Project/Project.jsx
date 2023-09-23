import { NavLink, Outlet } from "react-router-dom";
import { motion as m } from "framer-motion";
import classes from "./style/project.module.css"

// images
import star from "./assets/star.png"



const Project = () => {

    const links = [
        {
            path: "/projectOne",
            name: "Star wars",
            img: star,
            body: "Lorem ipsum dolor sit amet consectetur.",
            id: 1
        },
        {
            path: "/projectTwo",
            name: "Knuten Keramikverkstad",
            body: "Lorem ipsum dolor sit amet consectetur.",
            id: 2
        },
        {
            path: "/projectThree",
            name: "LitRate",
            body: "Lorem ipsum dolor sit amet consectetur.",

            id:3
        },
        {
            path: "/projectFour",
            name: "Mario",
            body: "Lorem ipsum dolor sit amet consectetur.",
            id:4
        },
        {
            path: "/projectFive",
            name: "React Forum",
            body: "Lorem ipsum dolor sit amet consectetur.",
            id:5
        },
        {
            path: "/projectSix",
            name: "Streak-Counter",
            body: "Lorem ipsum dolor sit amet consectetur.",
            id:6
        },
        {
            path: "/projectSeven",
            name: "Todo list",
            body: "Lorem ipsum dolor sit amet consectetur.",
            id:7
        },
    ]
    return ( 
        <section id="project">
            <div className="contentWrapper">
                <m.h2 initial={{ y: 10}} animate={{ y: 0}} transition={{ duration: 0.5, ease: "easeInOut" }} >Projekt</m.h2>
                <m.div initial={{ y: 40}} animate={{ y: 0}} transition={{ duration: 0.5, ease: "easeInOut" }} >

                    <div className={classes.projectContainer}> 
                        {links.map(link => (
                                <NavLink key={link.id} to={`${link.path}`}>
                                    <div className={classes.projectCard}>
                                        <div className={classes.fakeImage}></div>
                                        <div className={classes.projectCardText}>
                                            <h3>{link.name}</h3>
                                            {/* <p>{link.body}</p> */}
                                        </div>
                                    </div>
                                </NavLink>
                        ))}
                    </div>
                </m.div>
            </div>
                
        </section>
     );
}
 
export default Project;