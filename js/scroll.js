const nav_wrapper = document.getElementById('nav-wrapper')

let nav_height = nav_wrapper.offsetHeight

function scrollNavTo(element, addtional_scroll=0) {
    const targetId = element.getAttribute('data-scroll')
    const targetElement = document.getElementById(targetId)

    const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY
    const offsetPosition = elementPosition - nav_height - addtional_scroll

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
    })

    console.log(`Scroll to ${targetId}: Adjusted by ${nav_height}px`)
    
}