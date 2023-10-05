import { easeInOut, motion as m, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import classes from "./header.module.scss"


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
        <m.header
            variants={{visible: {y: 0},hidden: { y: "-100%" }}} animate={hidden ? "hidden" : "visible"} transition={{duration: 0.35, ease: easeInOut}} >
            <div>
                <h1>Sofia Jespersen</h1>
            </div>
                    
        </m.header>
    );
}
 
export default Header;