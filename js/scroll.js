

let nav_wrapper = document.getElementById('nav-wrapper')

let nav_height = nav_wrapper.offsetHeight

function scrollNavTo(element) {
    const targetId = element.getAttribute('data-scroll')
    const targetElement = document.getElementById(targetId)
    
    const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY
    const offsetPosition = elementPosition - nav_height
    
    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
    })
}

function updateNavheight() {
    nav_wrapper = document.getElementById('nav-wrapper')
    nav_height = nav_wrapper.offsetHeight
}

document.addEventListener("DOMContentLoaded", () => {
    updateNavheight()
})

window.addEventListener("resize", () => {
    updateNavheight()
})