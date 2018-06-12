
var modal2 = document.querySelector('.modal2');
var burger = document.querySelector('.header__burger');
var close = document.querySelector('.close');
var MenuItems=[];
var MenuItemsModal=[];

console.log(modal2);
MenuItems=Array.prototype.slice.call(document.getElementsByClassName('js-nav__list'));
MenuItemsModal = cloneNodeClass(MenuItems);
burger.addEventListener('click', initBurger); 
close.addEventListener('click', closeBurger); 
for (i = 0; i < MenuItemsModal.length; i++) {
  MenuItemsModal[i].addEventListener('click', closeBurger);
}


function initBurger(){

  for (var i = 0; i < MenuItemsModal.length; i++) {
     modal2.appendChild(MenuItemsModal[i]); 
 }

  modal2.className += " opened";
for (var i = 0; i < MenuItemsModal.length; i++) {
 MenuItemsModal[i].className +=" nav-open";
  }
}



function cloneNodeClass(arr){
    var arr2=[];
    for (var i = 0; i < arr.length; i++) {
        arr2[i]=arr[i].cloneNode(true);
      }
    return arr2;
}

function closeBurger(){
  modal2.classList.remove('opened');
}