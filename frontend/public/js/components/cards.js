document.addEventListener("DOMContentLoaded", () => {
  fetch("/frontend/public/views/components/cards.html")
    .then(response => response.text())
    .then(data => {
      const container = document.querySelector(".cards-container");
      container.innerHTML = data;
    })
    .catch(error => console.error("Error cargando el componente:", error));
});
