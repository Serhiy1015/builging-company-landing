let dropMenu = document.getElementById('drop-menu-wrap')
let socMedia = document.getElementById('soc-media')
let triangle = document.getElementById('triangle')
socMedia.style.cursor = 'pointer'
document.addEventListener('click', function (event) {
    if (event.target.closest('#soc-media')) {
        dropMenu.classList.toggle('drop-active')
        triangle.classList.toggle("triangle-active")
    } else {
        dropMenu.classList.remove('drop-active')
        triangle.classList.remove("triangle-active")
    }

})

let burgerMenuIcon = document.getElementById('menu-icon')
let burgerBack = document.getElementById('burger-back')
let closeMenu = document.getElementById('times')
let burgerMenuContent = document.getElementById('header-menu')
const body = document.querySelector('body');


burgerMenuIcon.addEventListener('click', function () {
    burgerBack.style.display = 'block'
    closeMenu.style.display = 'block'
    burgerMenuContent.style.display = 'flex'
    burgerMenuIcon.style.display = 'none'
    body.style.overflow = 'hidden';
})
closeMenu.addEventListener('click', function(){
    burgerBack.style.display = 'none'
    closeMenu.style.display = 'none'
    burgerMenuContent.style.display = 'none'
    burgerMenuIcon.style.display = 'flex'
    body.style.overflow = 'auto';
})
