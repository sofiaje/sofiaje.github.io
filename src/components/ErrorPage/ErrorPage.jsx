import { motion as m} from "framer-motion";


const ErrorPage = () => {
    return ( 
        <section>
            <div className="contentWrapper">
                <m.h2 initial={{ y: 10}} animate={{ y: 0}} transition={{ duration: 0.5, ease: "easeInOut" }} >Error 404</m.h2>
            </div>
        </section>
     );
}
 
export default ErrorPage;