let contentWrapper = document.getElementById("contentWrapper")
let homeBtn = document.getElementById("homeBtn");
let portfolioBtn = document.getElementById("portfolioBtn");
let cvBtn = document.getElementById("cvBtn");
let contactBtn = document.getElementById("contactBtn");
let aboutBtn = document.getElementById("aboutBtn");




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




//---------------------------about ---------------------------------------------------------------------------------


aboutBtn.addEventListener("click", () => {
    contentWrapper.innerHTML = `

    <section class="textSection">
        <h2>Om mig</h2>
        <p>En positiv, ansvarstagande och nyfiken människa med ett stort intresse för kommunikation och problemlösning.<br><br>
        Mitt intresse för kod startade i början av 2000-talet med olika sociala communitys där man hade egna sidor att jobba med. Verktygen var då ganska begränsande men det fanns en utmaning i det som 
        lockade mig. Jag uppskattar det direkta i kodskrivandet - att resultaten kommer snabbt men också att det finns hundra sätt att skriva en kod på, man får göra sin egen grej!</p>
    </section> 
    `
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
        <section class="textSection">
            <h2>Arbetslivserfarenhet</h2>
            <p>Jag har spenderat större delen av mitt arbetsliv inom handels, på företag som ICA och Plantagen men främst på IKEA där jag också jobbar extra under utbildningen.<br><br>
            Genom åren har jag testat på det mesta inom området så som kassa, varuinköp, logistik och lekrum men mest har jag varit på kundservice. 
            Här får jag använda färdigheter som jag också tror kan komma till nytta i mitt framtida yrke som utvecklare. 
            Det handlar i stort om god kommunikation, beslutsfattande samt problemlösning då man ofta behöver vara kreativ för att i samråd med 
            kund komma fram till den bästa lösningen för båda parter!</p>
        </section>

        <section class="textSection">
            <h2>Skills</h2>
            <p>Adobe Illustrator, Adobe Photoshop</p>
            <p>Agila arbetsprocesser, scrum</p>
            <p>JS, HTML5, CSS/SCSS, Bootstrap, Bulma</p>
        </section>

        <section class="textSection">
            <h2>Utbildning</h2>
            <p>Jag läser för tillfället mitt första år som student på Frontend programmet på Nackademin Yrkeshögskola i Solna, en utbildning som jag trivs väldigt bra på!</p><br>
        </section>

    <div class="education-container">
        <section class="textSection-small">
            <p><span class="course">Frontend utveckling</span><br>
            <span Nackademin class="school">Nackademin</span> <br>
            2022 - nu</p><br>
            <p>Tvååring utbildning som fokuserar främst på Javascript. Vi har jobbat med projektmetodik så som agila arbetsprocesser och scrum. 
            Ungefär 25procent av utbildningen är förlagd till LIA dvs lärande i arbete som genomförs på plats på ett företag. Min LIA startar i november 2023.</p>
        </section>

        <section class="textSection-small">
            <p><span class="course">Konst och design</span><br>
            <span class="school">St sigfrids folkhögskola</span> <br>
            2016 - 2018</p><br>
            <p>Tvåårig konstutbildning som inkluderar konst, illustration och grafisk design. Det första året var ett allmänt år där man 
            fick prova på lite olika tekniker samt bygga upp en grundkunskap i färglära, komposition och skissteknik, medan andra året var 
            mer inriktat och uppbyggt kring olika projekt. </p>
        </section>

        <section class="textSection-small">
            <p>Relevanta kurser</p><br>
            <p><span class="course">Kulturjournalistik och Kulturkritik 7.5hp</span><br><span class="school">Svenska filminstitutet vid Stockholms Universitet</span></p><br>
            <p><span class="course">Digital grafik och Illustration 7.5hp</span><br><span class="school">Södertörns Högskola Stockholm</span></p>
        </section>
    </div>

    `
})


//--------------------------- contact ---------------------------------------------------------------------------------

contactBtn.addEventListener("click", () => {
    closeMenu();
    contentWrapper.innerHTML = `<h2>Kontakt</h2>
    <section class="textSection"><p>Är du nyfiken på vem jag är och vill veta mer? Har du en idé som du vill ha hjälp att realisera? 
    Tveka inte att ta kontakt med mig via sofia.jespersen@hotmail.com (eller återkom om några dagar för att skåda ett tjusigt kontaktformulär nedan).</p></section>
    <div class="formcontainer">
        <form name="contact" method="post" action="/" id="mailForm">
            <label for="name" required>Namn:</label><br>
            <input type="text" id="name" class="formelement" disabled><br>
            <label for="email" required>Email:</label><br>
            <input type="text" id="email" class="formelement" disabled><br>
            <label for="textarea" required>Meddelande:</label><br>
            <textarea id="textarea" class="formelement" disabled></textarea><br>
            <button class="btn formBtn" disabled>Skicka</button>
        </form>
    </div>
    `

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

