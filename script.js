
// MENU

let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click',()=>{
    menu.classList.add('abrir-menu')
})
menu.addEventListener('click',()=>{
    menu.classList.remove('abrir-menu')
})
overlay.addEventListener('click',()=>{
    menu.classList.remove('abrir-menu')
})

// NAVEGAÇÃO

const container = document.getElementById("projetosContainer")
const btnAnterior = document.getElementById("anterior")
const btnProximo = document.getElementById("proximo")

    // Largura de cada projeto (incluindo gaps)
    const scrollAmount = 320

    btnAnterior.addEventListener("click", () => {
      container.scrollLeft -= scrollAmount // Move para o projeto anterior
    });

    btnProximo.addEventListener("click", () => {
      container.scrollLeft += scrollAmount // Move para o próximo projeto
    });



