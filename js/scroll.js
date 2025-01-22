function scrollNav() {

    const nav_wrapper = document.getElementById('nav-wrapper')
    
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
}

document.addEventListener("DOMContentLoaded", () => {
    scrollNav()
})

window.addEventListener("resize", () => {
    scrollNav()
})