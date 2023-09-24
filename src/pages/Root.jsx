import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Root = () => {

    const projects = [
     
        
        {
            path: "/projectThree",
            name: "LitRate",
            image: "/assets/litRate.png",
            body: "Slutprojekt från kursen Interaktion med CMS. Har använt Strapi Headless CMS för att skapa en backend till en bokaffär. Här kan användare logga in, spara böcker i en läslista och betygsätta dessa.",
            tech: ["Strapi", "Javascript", "Scss", "Flexbox"],
            github: "https://github.com/sofiaje/BookApp",
            webpage: null,
            id: 0
        },
        {
            path: "/projectOne",
            name: "Star wars Trivia",
            image: "/assets/star.png",
            body: "Ett Star Wars projekt som tillåter användaren att jämnföra olika karaktärer från filmerna. Projektet använder SWAPI, ett något långsamt Star Wars Trivia API.",
            tech: ["Javascript", "HTML", "Css", "Flexbox"],
            github: "https://github.com/sofiaje/star-wars",
            webpage: "https://sofiaje.github.io/star-wars/",
            id: 1
        },
        {
            path: "/projectFour",
            name: "Mario",
            image: "/assets/mario.png",
            body: "Ett litet projekt för att testa på spelutveckling i mycket liten skala. Alla bilder är genererade i Midjourney.",
            tech: ["Javascript", "HTML", "Css"],
            github: "https://github.com/sofiaje/Mario",
            webpage: "https://sofiaje.github.io/Mario",
            id: 2
        },
       
        {
            path: "/projectTwo",
            name: "Knuten Keramikverkstad",
            image: "/assets/knuten.png",
            body: "Slutprojekt för kursen HTML och CSS. En hemsida för en fiktiv keramikstudio i Stockholm.",
            tech: ["HTML", "Css", "Flexbox"],
            github: "https://github.com/sofiaje/project",
            webpage: "https://sofiaje.github.io/project/",
            id: 3
        },
    
        
        {
            path: "/projectFive",
            name: "React Forum",
            body: "Ett av mina första små React projekt.",
            tech: ["React"],
            github: "https://github.com/sofiaje/forum",
            webpage: null,
            id: 4
        },
        {
            path: "/projectSix",
            name: "Streak-Counter",
            image: "/assets/count.png",
            body: "Mitt första react projekt",
            tech: ["React"],
            github: "https://github.com/sofiaje/streak-counter",
            webpage: "https://sofiaje.github.io/streak-counter/",
            id: 5
        },
        {
            path: "/projectSeven",
            name: "Todo list",
            image: "/assets/todo.png",
            body: "Klassisk nybörjar-app i React, med minimalistisk design.",
            tech: ["React", "Css", "Flexbox"],
            github: "https://github.com/sofiaje/todoRe",
            webpage: "https://sofiaje.github.io/todoRe/",
            id: 6
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
