let contentWrapper = document.getElementById("contentWrapper")
let homeBtn = document.getElementById("homeBtn");
let portfolioBtn = document.getElementById("portfolioBtn");
let cvBtn = document.getElementById("cvBtn");
let contactBtn = document.getElementById("contactBtn");

//--------------------------- menu ---------------------------------------------------------------------------------


const primaryNav = document.querySelector(".primary-nav");
const navToggle = document.querySelector(".mobile-nav-toggle");
const icon = document.querySelector(".h-menu");

navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true)
        navToggle.setAttribute("aria-expanded", true)
    } else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false)
        navToggle.setAttribute("aria-expanded", false)
    }
})

function closeMenu() {
    primaryNav.setAttribute("data-visible", false)
    navToggle.setAttribute("aria-expanded", false)
}




//--------------------------- home page ---------------------------------------------------------------------------------


function loadPage() {
    contentWrapper.innerHTML = `
    <div class="firstPageWrapper">
        <img src="assets/mebe.png" class="portrait" alt="">
        <div class="textSection"><h1 class="first-page-heading">Frontend<br>developer</h1>
        <p class="subheading">Kreativ och nyfiken frontend student baserad i Stockholm. OBS! Sidan är under uppbyggnad. Bear with me!</p></div>
    </div>`
}


homeBtn.addEventListener("click", () => {
    closeMenu();
    loadPage();
})


//--------------------------- portfolio ---------------------------------------------------------------------------------

portfolioBtn.addEventListener("click", () => {
    closeMenu();
    contentWrapper.innerHTML = `
    <section class="textSection"><h2>Skolprojekt</h2><p>Här samsas lite större och lite mindre projekt från skolan.</p></section>
    <div class="project-container">
        <a href="https://sofiaje.github.io/star-wars" target="_blank"><div class="projects">Star wars trivia</div></a>
        <a href="https://sofiaje.github.io/project/" target="_blank"><div class="projects">Knuten keramikverkstad</div></a>
        <a href="https://stormstina.github.io/my-lists/" target="_blank"><div class="projects">Gruppprojekt shoppinglista</div></a>
        <a href="#"><div class="projects" target="_blank">Tamagotchi</div></a>
        <a href="https://sofiaje.github.io/activities/" target="_blank"><div class="projects">Activity generator</div></a>
    </div>
    
    `
})


//--------------------------- CV ----------------------------------------------------------------------------------------

cvBtn.addEventListener("click", () => {
    closeMenu();

    contentWrapper.innerHTML = `
    <section class="textSection"><h2>Om mig</h2>
    <p>It has survived not only five centuries, but also the leap into electronic typesetting, 
    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
    sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
    like Aldus PageMaker including versions of Lorem Ipsum.</p></section>
    
    <section class="textSection"><h2>Skills</h2>
    <p>Adobe Illustrator, Adobe Photoshop</p>
    <p>Agila arbetsprocesser, scrum</p>
    <p>JS, HTML5, CSS/SCSS, Bootstrap, Bulma</p></section>

    <section class="textSection"><h2>Arbetslivserfarenhet</h2>
    <p>It has survived not only five centuries, but also the leap 
    into electronic typesetting, remaining essentially unchanged. 
    It was popularised in the 1960s.</p></section>

    <section class="textSection"><h2>Utbildning</h2>
    <p>Relevant utbildning nedan. Är för tillfället student på Nackademin Yrkeshögskola. It has survived not only five centuries, but also the leap into electronic typesetting.</p></section>

    <div class="flex">
    <section class="textSection-small"><p>Frontend utveckling<br>Nackademin <br>2022 - nu</p><br><p>Tvååring utbildning som fokuserar främst på Javascript. Agila arbetsprocesser. Ungefär 25procent av utbildningen är LIA dvs lärande i arbetslivet.</p></section>
    <section class="textSection-small"><p>Konst och design<br> St sigfrids folkhögskola <br>2016 - 2018</p><br><p>Tvåårig konstutbildning, inkluderade konst, grafisk design och . Andra året projekt år. </p></section></div>
    
    `
})


//--------------------------- contact ---------------------------------------------------------------------------------

contactBtn.addEventListener("click", () => {
    closeMenu();
    contentWrapper.innerHTML = `<h2>Kontakt</h2>
    <section class="textSection"><p>Är du nyfiken på vem jag är och vill veta mer? Har du en idé som du vill ha hjälp att realisera? 
    Tveka inte att ta kontakt med mig via sofia.jespersen@hotmail.com (eller återkom om några dagar för att skåda ett tjusigt kontaktformulär nedan).</p></section>

    <div class="formcontainer">
        <form id="mailForm">
            <label for="name" required>Namn:</label><br>
            <input type="text" id="name" class="formelement"><br>
            <label for="email" required>Email:</label><br>
            <input type="text" id="email" class="formelement"><br>
            <label for="textarea" required>Meddelande:</label><br>
            <textarea id="textarea" class="formelement"></textarea><br>
            <button class="btn" disabled>Skicka</button>
        </form>
    </div>`

})


//---------------------------------------------------------------------------------------------------------------------



//funktion som tar en array med objekt och returnerar en lista som textsträng
function createHTMLString(arr) {
    let liString = "";
    arr.forEach(element => {
        console.log(element.company)
        liString += `<p>${element.company}</p>
        <li>${element.year}</li>
        <li>Arbetsroll: ${element.role}</li><br>`
    });
    return liString;
}



loadPage();

