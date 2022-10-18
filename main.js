const hamburguerMenu = document.querySelector('.header__hamburguer');
const mobilMnu= document.querySelector('.mobileMenu');

hamburguerMenu.addEventListener('click', toggleHamburguerMenu);


function toggleHamburguerMenu(){

    mobilMnu.classList.toggle('innactive');

    console.log('como estas mario');
    
}


