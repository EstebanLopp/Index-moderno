document.addEventListener("DOMContentLoaded", () => {
  fetch("/frontend/public/views/components/cards_2.html")
    .then(response => response.text())
    .then(data => {
      const container = document.querySelector(".cardstwo-container");
      container.innerHTML = data;
    })
    .catch(error => console.error("Error cargando el componente:", error));
});