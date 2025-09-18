document.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-heart")) {
    e.target.classList.toggle("liked");
  }
});