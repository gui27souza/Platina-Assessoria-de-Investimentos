const collapse_button = document.getElementById('collapse-button')
const header_nav = document.getElementById('nav-links')
const menu_animation = document.getElementById('collapse-button-animation')
const nav_closer = document.getElementById('nav-closer')

let header_is_open = true

function header() {

    if (header_is_open) {
        nav_closer.style.display = 'none'
        header_nav.style.bottom = '120rem'
        menu_animation.style.transform = 'rotate(90deg)'
        header_is_open = false
    } 
    else {
        nav_closer.style.display = 'block'
        headerNavSize()
        menu_animation.style.transform = 'rotate(0deg)'
        header_is_open = true
    }

}

function headerNavSize() {
    let header_nav_size = header_nav.offsetHeight
    header_nav.style.bottom = header_nav_size*(-1) + 'px'
}

window.addEventListener('resize', () => {
    nav_closer.style.display = 'none'
    header_nav.style.bottom = '120rem'
    menu_animation.style.transform = 'rotate(90deg)'
    header_is_open = false
})

window.addEventListener("load", () => {
    nav_closer.style.display = 'none'
    header_nav.style.bottom = '120rem'
    menu_animation.style.transform = 'rotate(90deg)'
    header_is_open = false
})