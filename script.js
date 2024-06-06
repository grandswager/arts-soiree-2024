let elements = document.getElementsByTagName("*");

/* Nice fade-in for article */
for (let element = 0; element < elements.length; element++) {
  if (elements[element].tagName != "BODY") {
    elements[element].style.animation = "transition-in .5s ease-in-out forwards";
    elements[element].style.animationDelay = ".5s";
    console.log(elements[element].tagName)
  } else {
    elements[element].style.opacity = "1";
    console.log("body")
  }
}
