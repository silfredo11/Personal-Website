const hamburguerMenu = document.querySelector('.header__hamburguer');
const mobilMnu= document.querySelector('.mobileMenu');
const iconMnuBar2 = document.querySelector('.header__hamburguerSons2');
const iconMnuBar1 = document.querySelector('.header__hamburguerSons1');
const iconMnuBar3 = document.querySelector('.header__hamburguerSons3');
const progress = document.querySelector('#progress');

hamburguerMenu.addEventListener('click', toggleHamburguerMenu);
hamburguerMenu.addEventListener('click', toggleCentralBar);
hamburguerMenu.addEventListener('click', toggleRotateBar);


function toggleHamburguerMenu(){

    mobilMnu.classList.toggle('innactive');

    console.log('como estas mario');
    
}

function toggleCentralBar(){
  iconMnuBar2.classList.toggle('son2');
}

function toggleRotateBar(){
  iconMnuBar1.classList.toggle('son1');
  iconMnuBar3.classList.toggle('son3');
}

window.addEventListener('load', () => {
  requestAnimationFrame(update);
})

function update() {
  progress.style.width = `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)}%`
  requestAnimationFrame(update);
}



