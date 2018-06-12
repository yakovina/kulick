var modal = document.querySelector('.modal__wrapper');
var bucket = document.querySelector('#bucket');
var seach = document.querySelector('#search');
var user = document.querySelector('#user');
var menuModal = document.querySelector('.menu__modal');
var close = document.querySelector('.close');




bucket.addEventListener('click', initModalBucket); 
seach.addEventListener('click', initModalSearch); 
//user.addEventListener('click', initModal); 
close.addEventListener('click', closeModal); 


function initModalBucket(){
  var buckets = document.getElementsByClassName('bucket');
  for(var i=0; i<buckets.length; i++){
        buckets[i].classList.remove("displaynone");
  }
  modal.className += " opened";
}

function initModalSearch(){
    var searches = document.getElementsByClassName('search');
    for(var i=0; i<searches.length; i++){
        searches[i].classList.remove("displaynone");
      }
      modal.className += " opened";
  }


function closeModal(){
    modal.classList.remove('opened');
    var buckets = document.getElementsByClassName('bucket');
    for(var i=0; i<buckets.length; i++){
          buckets[i].classList.add("displaynone");
    }
    var searches = document.getElementsByClassName('search');
    for(var i=0; i<searches.length; i++){
        searches[i].classList.add("displaynone");
    }
}

