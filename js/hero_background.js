const main_section = document.getElementById('main-section')

function heroBackgroundEffect() {

    let min = -50000
    let max = 50000
    let rand1 = Math.floor(Math.random() * (max - min + 1)) + min
    let rand2 = Math.floor(Math.random() * (max - min + 1)) + min
    
    let min_cubic = -2
    let max_cubic = 2
    let cubic1 = Math.random()
    let cubic2 = Math.random() * (max_cubic - min_cubic + 1) + min_cubic
    let cubic3 = Math.random()
    let cubic4 = Math.random() * (max_cubic - min_cubic + 1) + min_cubic
    
    main_section.style.backgroundPosition = rand1 + 'px ' + rand2 + 'px'
    
    main_section.style.transition = `background-position 300s cubic-bezier(${cubic1}, ${cubic2}, ${cubic3}, ${cubic4})`
    
}

document.addEventListener("DOMContentLoaded", heroBackgroundEffect())