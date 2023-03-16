let contentWrapper = document.getElementById("contentWrapper")
let homeBtn = document.getElementById("homeBtn");
let portfolioBtn = document.getElementById("portfolioBtn");
let cvBtn = document.getElementById("cvBtn");
let contactBtn = document.getElementById("contactBtn");


function loadPage() {
    contentWrapper.innerHTML = `
        <h1 class="first-page-heading">Frontend<br>developer</h1>
        <p class="subheading">Frontend student, based in Stockholm.</p>`
}

homeBtn.addEventListener("click", () => {
    closeMenu();
    loadPage();
})

portfolioBtn.addEventListener("click", () => {
    closeMenu();
    contentWrapper.innerHTML = `<h1>Portfolio comming soon</h1>`
})

cvBtn.addEventListener("click", () => {
    closeMenu();
    contentWrapper.innerHTML = `<h1>CV comming soon</h1>`
})

contactBtn.addEventListener("click", () => {
    closeMenu();
    contentWrapper.innerHTML = `<h1>Contact comming soon</h1>`

})




loadPage();