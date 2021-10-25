/* App state */
let activeIndex = 0;
const brakPoint = 768;

/* Grab DOM elements */
const questionElements = document.querySelectorAll(".faq__question");
const image = document.querySelector(".image__element");

questionElements[activeIndex].classList.add("active");
/* listen for events */
questionElements.forEach((element, index) => {
  element.addEventListener("click", (event) => {
    questionElements[activeIndex].classList.remove("active");
    activeIndex = index;
    questionElements[activeIndex].classList.add("active");
    /* Do thins on those elements */
  });
});

function changeImage() {
  if (window.innerWidth > brakPoint) {
    image.src = "images/illustration-woman-online-desktop.svg";
  } else {
    image.src = "images/illustration-woman-online-mobile.svg";
  }
}

window.onload = changeImage;
window.addEventListener("resize", changeImage);
