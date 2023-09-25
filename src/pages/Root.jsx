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
            apiAdress: null,
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
            apiAdress: "https://swapi.dev/",
            github: "https://github.com/sofiaje/star-wars",
            webpage: "https://sofiaje.github.io/star-wars/",
            id: 1
        },
        {
            path: "/projectFour",
            name: "Mario",
            image: "/assets/mario.png",
            body: "Ett litet projekt för att testa på spelutveckling i en väldigt liten skala. Pixelbilderna är genererade i Midjourney. Let's GO! ",
            tech: ["Javascript", "HTML", "Css"],
            apiAdress: null,
            github: "https://github.com/sofiaje/Mario",
            webpage: "https://sofiaje.github.io/Mario",
            id: 2
        },
        {
            path: "/projectTwo",
            name: "Knuten Keramikverkstad",
            image: "/assets/knuten.png",
            body: "Slutprojekt för kursen HTML och CSS. En hemsida för en fiktiv keramikstudio i Stockholm.",
            tech: ["HTML", "Flexbox", "Css", "Javascript"],
            apiAdress: null,
            github: "https://github.com/sofiaje/project",
            webpage: "https://sofiaje.github.io/project/",
            id: 3
        },
        {
            path: "/projectFive",
            name: "React Forum",
            image: "/assets/forum.png",
            body: "Ett av mina första små React projekt, en lektionsuppgift där vi skulle skapa ett forum med hjälp av data som hämtats från JSONPlaceholder API. Första listar ut titlar på bloggposter, där man kan klicka på en för att läsa hela inlägget, se vem som skrivit det och se kommentarer på inlägget.",
            tech: ["React", "React Router", "Css"],
            apiAdress: "https://jsonplaceholder.typicode.com/",
            github: "https://github.com/sofiaje/forum",
            webpage: null,
            id: 4
        },
        {
            path: "/projectSix",
            name: "Streak-Counter",
            image: "/assets/count.png",
            body: "Mitt första react projekt! En streak-counter som håller reda på hur många dagar man gjort något. Använder localStorage så att användaren kan komma tillbaka dag efter dag.",
            tech: ["React", "React Router"],
            apiAdress: null,
            github: "https://github.com/sofiaje/streak-counter",
            webpage: "https://sofiaje.github.io/streak-counter/",
            id: 5
        },
        {
            path: "/projectSeven",
            name: "Todo list",
            image: "/assets/todo.png",
            body: "Klassisk nybörjar-app i React, med minimalistisk layout. Använder Redux toolkit för att hålla reda på användarens namn och vad som ska göras. Local storage ser till så att användaren kan spara sina göromål. Användaren kan lägga till sitt namn, lägga till saker att göra, ta bort och markera dessa som klara. Man kan även redigera om man skulle råka skriva fel eller behöver ändra på något!",
            tech: ["React", "Redux Toolkit", "Css", "Flexbox"],
            apiAdress: null,
            github: "https://github.com/sofiaje/todoRe",
            webpage: "https://sofiaje.github.io/todoRe/",
            id: 6
        },
    ]


    const firstPageInfo = [
        { title: "Om mig", body: "En positiv, ansvarstagande och nyfiken människa med ett stort intresse för kommunikation och problemlösning." },
        { title: "Intresset", body: "Mitt intresse för kod startade i början av 2000-talet med olika sociala communitys där man hade egna sidor att jobba med. Verktygen var då ganska begränsande men det fanns en utmaning i det som lockade mig." },
        { title: "Varför webutveckling?", body: "Jag uppskattar det direkta i kodskrivandet - att resultaten kommer snabbt men också att det finns hundra sätt att skriva en kod på, man får göra sin egen grej!" }
    ]


    return ( 
        <div className="pageWrapper">
            <Header />
            <main>
                <Outlet context={{projects, firstPageInfo}}/>
            </main>
            <Footer />
        </div>
     );
}
 
export default Root;
