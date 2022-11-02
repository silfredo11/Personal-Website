const hamburguerMenu = document.querySelector('.header__hamburguer');
const mobilMnu= document.querySelector('.mobileMenu');
const progress = document.querySelector('#progress');

hamburguerMenu.addEventListener('click', toggleHamburguerMenu);


function toggleHamburguerMenu(){

    mobilMnu.classList.toggle('innactive');

    console.log('como estas mario');
    
}

window.addEventListener('load', () => {
  requestAnimationFrame(update);
})

function update() {
  progress.style.width = `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)}%`
  requestAnimationFrame(update);
}

