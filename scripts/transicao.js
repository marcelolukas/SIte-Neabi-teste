window.addEventListener("load", () => {
  const transicao = document.querySelector(".div_transicao");
  if (transicao) {
    transicao.style.opacity = "0";
    setTimeout(() => {
      transicao.style.display = "none";
    }, 500);
  }

  setTimeout(() => {
    const card = document.querySelector(".hero__card-delayed");
    if (card) {
      card.classList.add("show");
    }
  }, 2000);

  const closeBtn = document.querySelector(".hero__card-delayed .close-btn");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      const card = document.querySelector(".hero__card-delayed");
      if (card) {
        card.classList.add("closing");
        const onTransitionEnd = () => {
          card.classList.remove("show", "closing");
          card.removeEventListener("transitionend", onTransitionEnd);
        };
        card.addEventListener("transitionend", onTransitionEnd);
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a[href]");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");

      if (
        href &&
        (href.startsWith("/") || href.startsWith(window.location.origin)) &&
        typeof document.startViewTransition === "function"
      ) {
        e.preventDefault();
        document.startViewTransition(() => {
          window.location.href = link.href;
        });
      }
    });
  });
});

if (typeof document.startViewTransition === "function") {
  document.startViewTransition(() => {
    // troca de conteudo
  });
}

function iniciarSlidesPorCard(seletor, intervaloMs = 5000) {
  const cards = document.querySelectorAll(seletor);

  cards.forEach((card) => {
    const imagens = Array.from(card.querySelectorAll("img"));

    if (imagens.length <= 1) {
      return;
    }

    let indiceAtual = 0;

    const mostrarImagemAtual = () => {
      imagens.forEach((imagem, indice) => {
        imagem.style.display = indice === indiceAtual ? "block" : "none";
      });
    };

    mostrarImagemAtual();

    setInterval(() => {
      indiceAtual = (indiceAtual + 1) % imagens.length;
      mostrarImagemAtual();
    }, intervaloMs);
  });
}

iniciarSlidesPorCard(".card-imagem");
iniciarSlidesPorCard(".card-imagem-second");
