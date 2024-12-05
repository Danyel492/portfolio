function menuShow() {
    let bottonMenu = document.getElementById('hamburguerCheck');
    let menuMobile = document.querySelector('.mobileMenu')
    if (bottonMenu.checked) {
        menuMobile.classList.add('openMenu')
    }
    else {
        menuMobile.classList.remove('openMenu')
    }
}

let bntMostrar = document.getElementById('btnMostrarMais')
let projetosEscondidos = document.getElementById('projetosEscondidos')

bntMostrar.addEventListener('click', function() {

    if (projetosEscondidos.style.display !== 'none') {
        projetosEscondidos.style.display = 'flex'
        bntMostrar.style.display = 'none'
    } 

    
} )