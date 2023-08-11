var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlide(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("Slide-fade");
  var dots = document.getElementsByClassName("dot");
  var prevButton = document.getElementsByClassName("previos")[0];
  var nextButton = document.getElementsByClassName("next")[0];
  
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  
  if (slideIndex == slides.length) {
    nextButton.style.display = "none";
  } else {
    nextButton.style.display = "block";
  }

  if (slideIndex == 1) {
    prevButton.style.display = "none";
  } else {
    prevButton.style.display = "block";
  }
}