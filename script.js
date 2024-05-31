let elements = document.getElementsByTagName("*");

/* Nice fade-in for article */
for (let element = 0; element < elements.length; element++) {
  elements[element].style.animation = "transition-in .5s ease-in-out forwards";
  elements[element].style.animationDelay = ".5s";
}