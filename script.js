let btn = document.querySelector("#btn");
let isDarkMode = false;

function setDarkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
    let myH3 = document.querySelector("h3")
    
if (isDarkMode === false) {
    isDarkMode = true; 
    btn.innerText = "Toggle light mode"
    myH3.style.color = "white";
} else {
      isDarkMode = false; 
        btn.innerText = "Toggle dark mode"
        myH3.style.color = "black";
        

}
}

let gap = 16;

let carousel = document.getElementById("carousel");
let content = document.getElementById("content");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

next.addEventListener("click", () => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", () => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", () => (width = carousel.offsetWidth));