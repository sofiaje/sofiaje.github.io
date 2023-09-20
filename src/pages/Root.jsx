import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";



const Root = () => {
    return ( 
        <div className="pageWrapper">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
     );
}
 
export default Root;
