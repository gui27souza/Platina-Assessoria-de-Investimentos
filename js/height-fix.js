function heightFix() {
    let window_height = window.innerHeight
    console.log("Altura da janela:", window_height)

    const nav = document.getElementById('nav-wrapper')

    const nav_height = nav.offsetHeight
    console.log("Altura do nav:", nav_height)

    const main = document.getElementById('main')
    const sobre_nos = document.getElementById('sobre-nos')
    const assessoria = document.getElementById('assessoria')
    const investimentos = document.getElementById('investimentos')
    const cambio = document.getElementById('cambio')

    let elementos = [main, sobre_nos, assessoria, investimentos, cambio]

    if (window.innerWidth >= 1279) {
        elementos.forEach(element => {
            element.style.height = `${window_height - nav_height}px`
            element.style.overflow = 'hidden'
        })
    }
}

document.addEventListener("DOMContentLoaded", () => {
    heightFix()
})

window.addEventListener("resize", () => {
    heightFix()
})
