import "./header.css"
import { NavLink } from "react-router-dom";
import { easeInOut, motion as m, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";



const Header = () => {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState()

    useMotionValueEvent(scrollY, "change", (latest) => {
        const prev = scrollY.getPrevious();
        if (latest > prev && latest > 100) {
            setHidden(true)
        } else {
            setHidden(false)
        }
    })

    return (
        <m.header className="header"
            variants={{visible: {y: 0},hidden: { y: "-100%" }}} animate={hidden ? "hidden" : "visible"} transition={{duration: 0.35, ease: easeInOut}} >
            <div>
                <h1>Sofia Jespersen</h1>

            </div>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/project">Projects</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </nav>
        </m.header>
    );
}
 
export default Header;