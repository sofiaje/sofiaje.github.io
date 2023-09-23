import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Root = () => {

    const projects = [
        {
            path: "/projectOne",
            name: "Star wars",
            body: "Lorem ipsum dolor sit amet consectetur.",
            tech: ["Javascript", "HTML", "Css", "Flexbox"],
            github: "https://github.com/sofiaje/star-wars",
            webpage: "https://sofiaje.github.io/star-wars/",
            id: 1
        },
        {
            path: "/projectTwo",
            name: "Knuten Keramikverkstad",
            body: "Lorem ipsum dolor sit amet consectetur.",
            tech: ["HTML", "Css", "Flexbox"],
            github: "https://github.com/sofiaje/project",
            webpage: "https://sofiaje.github.io/project/",
            id: 2
        },
        {
            path: "/projectThree",
            name: "LitRate",
            body: "Lorem ipsum dolor sit amet consectetur.",
            tech: ["Strapi", "Javascript", "Scss", "Flexbox"],
            github: "https://github.com/sofiaje/BookApp",
            id: 3
        },
        {
            path: "/projectFour",
            name: "Mario",
            body: "Lorem ipsum dolor sit amet consectetur.",
            tech: ["Javascript", "HTML", "Css"],
            github: "https://github.com/sofiaje/Mario",
            webpage: "https://sofiaje.github.io/Mario",
            id: 4
        },
        {
            path: "/projectFive",
            name: "React Forum",
            body: "Lorem ipsum dolor sit amet consectetur.",
            tech: ["React"],
            github: "https://github.com/sofiaje/forum",
            id: 5
        },
        {
            path: "/projectSix",
            name: "Streak-Counter",
            body: "Lorem ipsum dolor sit amet consectetur.",
            tech: ["React"],
            github: "https://github.com/sofiaje/streak-counter",
            webpage: "https://sofiaje.github.io/streak-counter/",
            id: 6
        },
        {
            path: "/projectSeven",
            name: "Todo list",
            body: "Lorem ipsum dolor sit amet consectetur.",
            tech: ["React", "Css", "Flexbox"],
            github: "https://github.com/sofiaje/todoRe",
            webpage: "https://sofiaje.github.io/todoRe/",
            id: 7
        },
    ]


    return ( 
        <div className="pageWrapper">
            <Header />
            <main>
                <Outlet context={{projects}}/>
            </main>
            <Footer />
        </div>
     );
}
 
export default Root;
