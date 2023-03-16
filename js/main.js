let contentWrapper = document.getElementById("contentWrapper")
let homeBtn = document.getElementById("homeBtn");
let portfolioBtn = document.getElementById("portfolioBtn");
let cvBtn = document.getElementById("cvBtn");


homeBtn.addEventListener("click", () => {
    closeMenu()
    contentWrapper.innerHTML = `<h1>Sofia Jespersen</h1>`

})

portfolioBtn.addEventListener("click", () => {
    closeMenu()
    contentWrapper.innerHTML = `<h1>Portfolio comming soon</h1>`
})

cvBtn.addEventListener("click", () => {
    closeMenu()
    contentWrapper.innerHTML = `<h1>CV comming soon</h1>`
})