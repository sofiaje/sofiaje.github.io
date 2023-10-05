import classes from "./techstack.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {} from '@fortawesome/free-solid-svg-icons'
import {    faReact,
    faSquareJs, 
    faSass, 
    faHtml5, 
    faFigma, 
    faGithubAlt, 
    faNpm, 
    faNodeJs,
    faCss3} from '@fortawesome/free-brands-svg-icons'


const Techstack = () => {
    const stack = [
    {name: "React", icon: faReact},
    {name: "Javascript", icon: faSquareJs},
    {name: "HTML5", icon: faHtml5},
    {name: "SASS", icon: faSass},
    {name: "Css", icon: faCss3},
    {name: "Node.js", icon: faNodeJs},
    {name: "npm", icon: faNpm},
    {name: "Figma", icon: faFigma},
    {name: "Github", icon: faGithubAlt},
]

    // why can't i map fontawesome icons? 
    return (
        <div className={classes.wrapper}>
            <div className="contentWrapper">
                <h2>Tools I use</h2>


                <div className={classes.flex}>
                    {stack.map((icon,i) => {
                        return (
                            <div key={i} className={classes.tool}>
                            <FontAwesomeIcon icon={icon.icon} size="2xl"/>
                            <p><small>{icon.name}</small></p>
                        </div>
                        )
                    })}
                </div>

            </div>
        </div>
    );

}

export default Techstack;