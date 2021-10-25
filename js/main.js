/* App state */
let activeIndex = 0;

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
    // const item = event.target;
    // item.classList.toggle("active");
  });
});
