import { motion as m } from "framer-motion";

const StreakCounter = () => {
    return (
        <div>
            <m.h3 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: "easeInOut" }}>Streak-counter</m.h3>
            <m.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: "easeInOut" }} >
                <p>Mitt första react projekt</p>
                <p>Github: <a href="https://github.com/sofiaje/streak-counter">kod</a><br />
                    Visit site: <a href="https://sofiaje.github.io/streak-counter/">sofiaje.github.io/streak-counter</a></p>
            </m.div>

        </div>
    );
}

export default StreakCounter;