//?------------Slider-----Area-------
const slides = document.getElementsByClassName('slider-item');
const dots = document.getElementsByClassName('slider-dot');

//todo foreach array 3 tricks methods -------------------
//*1- document.querySelectorAll('slider-item');

//?2- [...document.getElementsByClassName('slider-item')];

//!3- you called  document.getElementsByClassName('slider-item') but you used style forEach this is  Array.from(slides).forEach()
// Array.from(slides).forEach((e) => {
//   console.log('you success 3.trick used goood!!');
// });

//todo foreach array 3 tricks methods ------------------

let slideIndex = 1;
showSlides(slideIndex);

setInterval(() => {
  showSlides((slideIndex += 1));
}, 4000);

function plusSlide(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'flex';
  dots[slideIndex - 1].className += ' active';
}

//?------------Slider-----Area-------
