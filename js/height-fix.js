// Function that manages the height of the sections based on the nav height
function heightFix() {
    let window_height = window.innerHeight

    const nav = document.getElementById('nav-wrapper')
    const nav_height = nav.offsetHeight

    const main = document.getElementById('main')
    const sobre_nos = document.getElementById('sobre-nos')
    const assessoria = document.getElementById('assessoria')
    const investimentos = document.getElementById('investimentos')
    const cambio = document.getElementById('cambio')
    const footer = document.getElementById('footer')

    let elementos = [main, sobre_nos, assessoria, investimentos, cambio, footer]

    if (window.innerWidth >= 1279) {
        elementos.forEach(element => {
            element.style.height = `${window_height - nav_height}px`
            element.style.overflow = 'hidden'
        })
    }
}

// The function is called whether the page is loaded or its size is changed
document.addEventListener("DOMContentLoaded", () => {
    heightFix()
})
window.addEventListener("resize", () => {
    heightFix()
})
