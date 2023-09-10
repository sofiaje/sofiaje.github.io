//--------------------------- menu ---------------------------------------------------------------------------------


const primaryNav = document.querySelector(".primary-nav");
const navToggle = document.querySelector(".mobile-nav-toggle");

function closeMenu() {
    primaryNav.setAttribute("data-visible", false)
    navToggle.setAttribute("aria-expanded", false)
}


navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true)
        navToggle.setAttribute("aria-expanded", true)
    } else if (visibility === "true") {
        closeMenu()
    }
})



let homeBtn = document.getElementById('homeBtn')
let aboutBtn = document.getElementById('aboutBtn')
let portfolioBtn = document.getElementById('portfolioBtn')
let portfolioBtn2 = document.getElementById('portfolioBtn2')
let cvBtn = document.getElementById('cvBtn')
let contactBtn = document.getElementById('contactBtn')
let contactBtn2 = document.getElementById('contactBtn2')


let homeSection = document.querySelector('.section-1')
let aboutSection = document.querySelector('.section-2')
let portfolioSection = document.querySelector('.section-3')
let cvSection = document.querySelector('.section-4')
let contactSection = document.querySelector('.section-5')

homeBtn.addEventListener('click', () => {
    homeSection.scrollIntoView({ behavior: "smooth" })
    closeMenu()
})
aboutBtn.addEventListener('click', () => {
    aboutSection.scrollIntoView({ behavior: "smooth" })
    closeMenu()
})
portfolioBtn.addEventListener('click', () => {
    portfolioSection.scrollIntoView({ behavior: "smooth" })
    closeMenu()
})
cvBtn.addEventListener('click', () => {
    cvSection.scrollIntoView({ behavior: "smooth" })
    closeMenu()
})
contactBtn.addEventListener('click', () => {
    contactSection.scrollIntoView({ behavior: "smooth" })
    closeMenu()
})

portfolioBtn2.addEventListener('click', () => {
    portfolioSection.scrollIntoView({ behavior: "smooth" })
})

contactBtn2.addEventListener('click', () => {
    contactSection.scrollIntoView({ behavior: "smooth" })
})