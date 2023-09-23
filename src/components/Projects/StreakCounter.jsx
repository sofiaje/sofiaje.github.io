import { motion as m } from "framer-motion";

const StreakCounter = () => {
    return (
        <section>
            <div className="contentWrapper">
                <m.div initial={{ y: 40 }} animate={{ y: 0 }} transition={{ duration: 0.5, ease: "easeInOut" }} >

                    <div>
                        <m.h3 initial={{ y: 40 }} animate={{ y: 0 }} transition={{ duration: 0.5, ease: "easeInOut" }}>Streak-counter</m.h3>
                        <m.div initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 0.5, ease: "easeInOut" }} >
                            <p>Mitt första react projekt</p>
                            <p>Github: <a href="https://github.com/sofiaje/streak-counter">kod</a><br />
                                Live demo: <a href="https://sofiaje.github.io/streak-counter/">sofiaje.github.io/streak-counter</a></p>
                        </m.div>

                    </div>
                </m.div>
            </div>
        </section>
    );
}

export default StreakCounter;