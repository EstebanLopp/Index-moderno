document.addEventListener("DOMContentLoaded", () => {
  fetch("/frontend/public/views/components/welcome.html")
    .then(response => response.text())
    .then(data => {
      document.querySelector(".welcome-container").innerHTML = data;
    })
    .catch(error => console.error("Error al cargar bienvenida:", error));
});
