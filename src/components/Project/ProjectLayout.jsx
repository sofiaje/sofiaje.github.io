import { Outlet } from "react-router-dom";
import { motion as m } from "framer-motion";


const ProjectLayout = () => {
    return ( 
        
            <section id="project">
            <div className="contentWrapper">
                <m.h2 initial={{ y: 10}} animate={{ y: 0}} transition={{ duration: 0.5, ease: "easeInOut" }} >Projekt</m.h2>
                <m.div initial={{ y: 40}} animate={{ y: 0}} transition={{ duration: 0.5, ease: "easeInOut" }} ></m.div>
                <Outlet />
            </div>
            </section>
     );
}
 
export default ProjectLayout;