 // Swiper inicial
  const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    autoplay: { delay: 2500, disableOnInteraction: false },
    slidesPerView: 2,
    spaceBetween: 10,
    breakpoints: { 600: { slidesPerView: 4, spaceBetween: 20 }, 900: { slidesPerView: 5, spaceBetween: 40 } }
  });

  // Função de paginação
  function criarPaginacao(itensSelector, containerId, paginacaoId) {
    const itens = document.querySelectorAll(itensSelector);
    const container = document.getElementById(containerId);
    const paginacao = document.getElementById(paginacaoId);
    const itensPorPagina = 3;
    const totalPaginas = Math.ceil(itens.length / itensPorPagina);

    function mostrarPagina(pagina) {
      itens.forEach(item => item.style.display = "none");
      const inicio = (pagina - 1) * itensPorPagina;
      const fim = inicio + itensPorPagina;
      for (let i = inicio; i < fim && i < itens.length; i++) {
        itens[i].style.display = "flex";
      }
      const botoes = paginacao.querySelectorAll("button");
      botoes.forEach(btn => btn.classList.remove("ativo"));
      if (botoes[pagina - 1]) botoes[pagina - 1].classList.add("ativo");
    }

    for (let i = 1; i <= totalPaginas; i++) {
      const botao = document.createElement("button");
      botao.textContent = i;
      botao.addEventListener("click", () => mostrarPagina(i));
      paginacao.appendChild(botao);
    }

    mostrarPagina(1);
  }

  document.addEventListener("DOMContentLoaded", function() {
    criarPaginacao("#aniversarios-juliana-container .item-aniversario", "aniversarios-juliana-container", "paginacao-juliana");
    criarPaginacao("#aniversarios-namoro-container .item-aniversario", "aniversarios-namoro-container", "paginacao-namoro");
  });
