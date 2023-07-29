document.addEventListener("DOMContentLoaded", function() {
  var slides = document.querySelectorAll(".testimonial-slide");
  var dotsContainer = document.querySelector(".slide-dots");
  var currentSlide = 0;
  var slideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds

  // Create slide dots
  for (var i = 0; i < slides.length; i++) {
    var dot = document.createElement("span");
    dot.classList.add("dot");
    dot.addEventListener("click", function() {
      var dotIndex = Array.from(dotsContainer.children).indexOf(this);
      goToSlide(dotIndex);
    });
    dotsContainer.appendChild(dot);
  }

  // Highlight the current dot
  function updateDots() {
    var dots = dotsContainer.querySelectorAll(".dot");
    dots.forEach(function(dot, index) {
      dot.classList.toggle("active", index === currentSlide);
    });
  }

  function nextSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
    updateDots();
  }

  function goToSlide(slideIndex) {
    slides[currentSlide].classList.remove("active");
    currentSlide = slideIndex;
    slides[currentSlide].classList.add("active");
    updateDots();
  }
});
