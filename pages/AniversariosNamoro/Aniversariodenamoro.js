document.addEventListener("DOMContentLoaded", function () {
  const itens = document.querySelectorAll(".item-aniversario");
  const container = document.getElementById("aniversarios-container");
  const paginacao = document.getElementById("paginacao");
  const itensPorPagina = 3;
  const totalPaginas = Math.ceil(itens.length / itensPorPagina);

  function mostrarPagina(pagina) {
    // Esconde todos os itens
    itens.forEach((item) => (item.style.display = "none"));

    // Mostra os itens da página atual
    const inicio = (pagina - 1) * itensPorPagina;
    const fim = inicio + itensPorPagina;
    for (let i = inicio; i < fim && i < itens.length; i++) {
      itens[i].style.display = "flex";
    }

    // Atualiza os botões de paginação
    const botoes = paginacao.querySelectorAll("button");
    botoes.forEach((btn) => btn.classList.remove("ativo"));
    botoes[pagina - 1].classList.add("ativo");
  }

  function criarPaginacao() {
    for (let i = 1; i <= totalPaginas; i++) {
      const botao = document.createElement("button");
      botao.textContent = i;
      botao.addEventListener("click", () => mostrarPagina(i));
      paginacao.appendChild(botao);
    }
  }

  criarPaginacao();
  mostrarPagina(1); // Mostra a primeira página
});
