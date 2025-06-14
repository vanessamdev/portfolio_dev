window.addEventListener("load", () => {
  const carrosseis = document.querySelectorAll(".carrossel");

  carrosseis.forEach((carrossel) => {
    const container = carrossel.querySelector(".carrossel__container");
    const btnLeft = carrossel.querySelector(".carrossel__btn--esquerda");
    const btnRight = carrossel.querySelector(".carrossel__btn--direita");

    if (!container || !btnLeft || !btnRight) return;

    btnLeft.addEventListener("click", () => {
      const itemWidth = container.children[0].offsetWidth + 16;
      container.scrollBy({ left: -itemWidth, behavior: "smooth" });
    });

    btnRight.addEventListener("click", () => {
      const itemWidth = container.children[0].offsetWidth + 16;
      container.scrollBy({ left: itemWidth, behavior: "smooth" });
    });
  });

  // MENU RESPONSIVO
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("cabecalho-menu");

  if (menuToggle && menu) {
    menuToggle.addEventListener("click", () => {
      menu.classList.toggle("ativo");
    });
  }
});
