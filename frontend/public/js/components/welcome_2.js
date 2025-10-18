document.addEventListener("DOMContentLoaded", () => {
  fetch("/frontend/public/views/components/welcome_2.html")
    .then(response => response.text())
    .then(data => {
      document.querySelector(".entertaiment-section").innerHTML = data;
    })
    .catch(error => console.error("Error al cargar bienvenida:", error));
});
