let contentWrapper = document.getElementById("contentWrapper")
let homeBtn = document.getElementById("homeBtn");
let portfolioBtn = document.getElementById("portfolioBtn");
let cvBtn = document.getElementById("cvBtn");
let contactBtn = document.getElementById("contactBtn");


console.log(jobs);

function loadPage() {
    contentWrapper.innerHTML = `
    <div class="firstPageWrapper">
        <img src="assets/mebe.png" class="portrait" alt="">
        <div class="textSection"><h1 class="first-page-heading">Frontend<br>developer</h1>
        <p class="subheading">Kreativ och nyfiken frontend student baserad i Stockholm. OBS! Sidan är under uppbyggnad.</p></div>
    </div>
    
    `


}


//--------------------------- home page ---------------------------------------------------------------------------------

homeBtn.addEventListener("click", () => {
    closeMenu();
    loadPage();
})


//--------------------------- portfolio ---------------------------------------------------------------------------------

portfolioBtn.addEventListener("click", () => {
    closeMenu();
    contentWrapper.innerHTML = `
    <section class="textSection"><h2>Skol projekt</h2><p>Här samsas lite större och lite mindre projekt från skolan.</p></section>
    <div class="project-container">
        <a href="https://sofiaje.github.io/star-wars" target="_blank"><div class="projects">Star wars trivia</div></a>
        <a href="https://sofiaje.github.io/project/" target="_blank"><div class="projects">Knuten keramikverkstad</div></a>
        <a href="https://stormstina.github.io/my-lists/" target="_blank"><div class="projects">Gruppprojekt shoppinglista</div></a>
        <a href="#"><div class="projects" target="_blank">Tamagotchi</div></a>
        <a href="https://sofiaje.github.io/activities/" target="_blank"><div class="projects">Bored? Use this activity generator</div></a>
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
    <p>It has survived not only five centuries, but also the leap 
    into electronic typesetting, remaining essentially unchanged. 
    It was popularised in the 1960s.</p></section>

    <section class="textSection"><h2>Arbetslivserfarenhet</h2>
    <p>It has survived not only five centuries, but also the leap 
    into electronic typesetting, remaining essentially unchanged. 
    It was popularised in the 1960s.</p></section>

    <section class="textSection"><h2>Utbildning</h2>
    <p>It has survived not only five centuries, but also the leap 
    into electronic typesetting, remaining essentially unchanged. 
    It was popularised in the 1960s.</p></section>
    
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

