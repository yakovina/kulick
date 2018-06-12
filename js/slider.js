var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName('slide');
    var dots= document.getElementsByClassName('dots__item');

    if (n > slides.length){
        slideIndex = 1;
    }
    else if ( n < 1){
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
        //потом записать это в класс
    }
    for (i = 0; i < dots.length; i++){
        dots[i].classList.remove("active");
    }
    slides[slideIndex-1].style.display="block";
    dots[slideIndex-1].classList.add("active");

}