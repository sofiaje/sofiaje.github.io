import './styles/App.css'


// pages
import Info from './components/Info/Info'
import Contact from './components/Contact/Contact'
// import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Project from './components/project/Project'
import Me from './components/Me/Me'
import Techstack from './components/TechStack/TechStack'

// projects

function App() {
    const projects = [
    {
        name: "EVE-Wallet",
        image: "/assets/wall.jpeg",
        body: "En skoluppgift för kursen Javascript 3, en applikation där användare kan hantera sina kreditkort. När applikationen startar hämtas en slumpmässig användare från random user API och ett kreditkort skapas i deras namn. Användaren listas sedan som ägare till alla nya kort. Man kan lägga till nya kort, men max fyra stycken.",
        tech: ["React", "Redux Toolkit", "React Router", "Sass", "Flexbox"],
        apiAdress: null,
        github: "https://github.com/sofiaje/cardwallet",
        webpage: null,
        id: 0
        },
        {
            name: "Star wars Trivia",
            image: "/assets/star.png",
            body: "Ett Star Wars projekt som tillåter användaren att jämnföra olika karaktärer från filmerna. Projektet använder SWAPI, ett något långsamt Star Wars Trivia API.",
            tech: ["Javascript", "HTML", "Css", "Flexbox"],
            apiAdress: "https://swapi.dev/",
            github: "https://github.com/sofiaje/star-wars",
            webpage: "https://sofiaje.github.io/star-wars/",
            id: 2
        },
    {
        name: "LitRate",
        image: "/assets/litRate.png",
        body: "Slutprojekt från kursen Interaktion med CMS. Har använt Strapi Headless CMS för att skapa en backend till en bokaffär. Här kan användare logga in, spara böcker i en läslista och betygsätta dessa.",
        tech: ["Strapi", "Javascript", "Scss", "Flexbox"],
        apiAdress: null,
        github: "https://github.com/sofiaje/BookApp",
        webpage: null,
        id: 1
    },
    {
        name: "Mario",
        image: "/assets/mario.png",
        body: "Ett litet projekt för att testa på spelutveckling i en väldigt liten skala. Pixelbilderna är genererade i Midjourney. Let's GO! ",
        tech: ["Javascript", "HTML", "Css"],
        apiAdress: null,
        github: "https://github.com/sofiaje/Mario",
        webpage: "https://sofiaje.github.io/Mario",
        id: 3
    },
    {
        name: "Knuten Keramikverkstad",
        image: "/assets/knuten.png",
        body: "Slutprojekt för kursen HTML och CSS. En hemsida för en fiktiv keramikstudio i Stockholm.",
        tech: ["Javascript", "HTML", "Css", "Flexbox"],
        apiAdress: null,
        github: "https://github.com/sofiaje/project",
        webpage: "https://sofiaje.github.io/project/",
        id: 4
    }
]


const firstPageInfo = [
    { title: "About me", body: "A positive, responsible, and curious individual with a strong interest in communication and problem-solving. That's me!" },
    { title: "Where it began", body: "My interest in coding began in the early 2000s through various social communities where one had their own pages to work on. The tools were quite limiting at the time, but there was a challenge in it that appealed to me." },
    { title: "LIA", body: "I am currently looking for an internship, starting in week 47." }
]


  return (
    <div>
        {/* <Header /> */}
        <Info firstPageInfo={firstPageInfo} />
        {/* <Me /> */}
        <Techstack />
        <Project projects={projects} />
        <Contact />
        <Footer />
    </div>

  )
}

export default App
