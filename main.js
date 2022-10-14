const hamburguerMenu = document.querySelector('.header__hamburguer');
const mobilMnu= document.querySelector('.mobileMenu');

hamburguerMenu.addEventListener('click', toggleHamburguerMenu);


function toggleHamburguerMenu(){

    mobilMnu.classList.toggle('innactive');

    console.log('como estas mario');
    
}


const lista = [ 2, 1, 5, 8, 6, 0];


function ordenarLista(lista){

 function funcionDePrueba(A, B) {

    return A - B;
   
  }
  
  const nuevaLista = lista.sort(funcionDePrueba);

}