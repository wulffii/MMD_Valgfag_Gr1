// Hjerte ikonet farve vil ændre sig så snart der bliver klikket på den. Hjertet styles inde på css'en.
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-heart")) {
    e.target.classList.toggle("liked");
  }
});