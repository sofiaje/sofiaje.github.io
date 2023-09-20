import { NavLink, Outlet } from "react-router-dom";
import { motion as m} from "framer-motion";


const Project = () => {

    const links = [
        {
            path: "/projectOne",
            name: "Star Wars Trivia",
            id: 1
        },
        {
            path: "/projectTwo",
            name: "Knuten Keramikverkstad",
            id: 2
        },
        {
            path: "/projectThree",
            name: "LitRate",
            id:3
        },
        {
            path: "/projectFour",
            name: "Mario",
            id:4
        },
        {
            path: "/projectFive",
            name: "React Forum",
            id:5
        },{
            path: "/projectSix",
            name: "Streak-Counter",
            id:6
        },
    ]
    return ( 
        <section id="project">
            <div className="contentWrapper">
                <m.h2 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: "easeInOut" }} >Projects</m.h2>
                <m.div initial={{ y: 40, opacity:0 }} animate={{ y: 0, opacity:1 }} transition={{ duration: 0.5, ease: "easeInOut" }} >
                    <p>Här samsas små och stora projekt.</p>
                    <ul className="flex">
                        {links.map(link => (
                            <li><NavLink className="btn" key={link.id} to={`/project${link.path}`}>{link.name}</NavLink></li>
                        ))}
                        
                    </ul>

                </m.div>
                <section className="mTop">
                    <Outlet />
                </section>
                
            </div>
        </section>
     );
}
 
export default Project;