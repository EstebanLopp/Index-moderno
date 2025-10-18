document.addEventListener("DOMContentLoaded", () => {
  fetch("/frontend/public/views/components/banner.html")
    .then(response => response.text())
    .then(data => {
      const container = document.querySelector(".banner-container");
      container.innerHTML = data;

      // Datos de los banners
      const banners = [
        {
          img: "/frontend/public/assets/imagen_idex.jpg",
          title: "COMPRA. GANÁ. VUELA.",
          desc: "Gana millas corp cuando compres en SenaCorp. Comprar nunca ha sido tan gratificante."
        },
        {
          img: "/frontend/public/assets/banner2.jpg",
          title: "MODA. ESTILO. TENDENCIA.",
          desc: "Descubre las últimas colecciones y vive la experiencia de la moda en SenaCorp."
        },
        {
          img: "/frontend/public/assets/banner3.jpg",
          title: "TECNOLOGÍA A TU ALCANCE.",
          desc: "Encuentra los mejores gadgets y productos tecnológicos del momento."
        }
      ];

      let index = 0;
      const bannerText = container.querySelector(".banner-text");
      const bannerContainer = container.querySelector(".banner-container");
      const leftArrow = container.querySelector(".banner-arrow.left");
      const rightArrow = container.querySelector(".banner-arrow.right");

      function updateBanner(direction) {
        // Aplicar fade-out
        bannerText.classList.remove("fade-in");
        bannerText.classList.add("fade-out");

        setTimeout(() => {
          // Cambiar índice y contenido
          index = (index + direction + banners.length) % banners.length;
          bannerContainer.style.backgroundImage = `url('${banners[index].img}')`;
          bannerText.querySelector("h1").textContent = banners[index].title;
          bannerText.querySelector("p").textContent = banners[index].desc;

          // Preparar fade-in suavemente
          bannerText.classList.remove("fade-out");

          // Forzar reflow para reiniciar la animación
          void bannerText.offsetWidth;

          bannerText.classList.add("fade-in");
        }, 400); // Duración del fade-out (ms)
      }

      leftArrow.addEventListener("click", () => updateBanner(-1));
      rightArrow.addEventListener("click", () => updateBanner(1));
    })
    .catch(error => console.error("Error al cargar el banner:", error));
});
