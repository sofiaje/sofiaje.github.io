import { motion as m } from "framer-motion";

const Todo = () => {
    return (
        <section>
            <div className="contentWrapper">
                <m.div initial={{ y: 40 }} animate={{ y: 0 }} transition={{ duration: 0.5, ease: "easeInOut" }} >


                    <div>

                        <m.h3 initial={{ y: 40 }} animate={{ y: 0 }} transition={{ duration: 0.5, ease: "easeInOut" }} >React todo</m.h3>
                        <m.div initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 0.5, ease: "easeInOut" }} >
                            <p>Klassisk nybörjar-app i React, med minimalistisk design.</p>
                            <p>Github: <a href="https://github.com/sofiaje/todoRe">kod</a><br />
                                Live demo: <a href="https://sofiaje.github.io/todoRe/">sofiaje.github.io/todoRe</a></p>
                        </m.div>
                    </div>
                </m.div>
            </div>
        </section>
    );
}

export default Todo;