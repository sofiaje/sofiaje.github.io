window.addEventListener('scroll', reveal)

function reveal() {
    let reveals = document.querySelectorAll('.reveal')
    // console.log(reveals)

    for (let i = 0; i < reveals.length; i++) {
        // console.log(reveals[i])
        let windowheight = window.innerHeight;
        let revealtop = reveals[i].getBoundingClientRect().top;

                
        if (revealtop < windowheight) {
            reveals[i].classList.add('active')
        } else {
            reveals[i].classList.remove('active')
        }
    }
}