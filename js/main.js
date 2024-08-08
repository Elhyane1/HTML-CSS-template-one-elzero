let menu_icon = document.querySelector('.icon')
let menu_icon_spans = document.querySelectorAll('span')
let nav_bar = document.querySelector('ul')

// function to animate the menu icon and show navbar
menu_icon.addEventListener('click', () => {
    menu_icon_spans[0].classList.toggle('positive-rotate')
    menu_icon_spans[1].classList.toggle('hide')
    menu_icon_spans[2].classList.toggle('negative-rotate')
    nav_bar.classList.toggle('show')
})

// function to hide nav bar when clicking outside the navbar
document.addEventListener('click', (event) => {
    if (!menu_icon.contains(event.target) &&  nav_bar.classList.contains('show')) {
        nav_bar.classList.remove('show');
        menu_icon_spans[0].classList.toggle('positive-rotate')
        menu_icon_spans[1].classList.toggle('hide')
        menu_icon_spans[2].classList.toggle('negative-rotate')
    }})