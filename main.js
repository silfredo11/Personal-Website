const hamburguerMenu = document.querySelector('.picture__image');
const mobilMnu= document.querySelector('.mobileMenu');

hamburguerMenu.addEventListener('click', toggleHamburguerMenu);


function toggleHamburguerMenu(){

    mobilMnu.classList.toggle('innactive');

    console.log('como estas mario');
    
}

