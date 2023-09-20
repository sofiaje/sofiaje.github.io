import "./header.css"
import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="header">
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
        </div>
    );
}
 
export default Header;