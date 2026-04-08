window.addEventListener('load', () => {
  const transicao = document.querySelector('.div_transicao');
  if (transicao) {
    transicao.style.opacity = '0';
    setTimeout(() => {
      transicao.style.display = 'none';
    }, 500);
  }

  // Show delayed card after 2 seconds
    setTimeout(() => {
      const card = document.querySelector('.hero__card-delayed');
      if (card) {
        card.classList.add('show');
      }
    }, 2000);

  // Close button for delayed card
  const closeBtn = document.querySelector('.hero__card-delayed .close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      const card = document.querySelector('.hero__card-delayed');
      if (card) {
        card.classList.add('closing');
        const onTransitionEnd = () => {
          card.classList.remove('show', 'closing');
          card.removeEventListener('transitionend', onTransitionEnd);
        };
        card.addEventListener('transitionend', onTransitionEnd);
      }
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a[href]');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('/') || href.startsWith(window.location.origin)) {
        e.preventDefault();
        document.startViewTransition(() => {
          window.location.href = link.href;
        });
      }
    });
  });
});

document.startViewTransition(() => {
  // troca de conteúdo
})

var indexValue = 0;

function slideShow() {

  const imagens = document.querySelectorAll(".card-imagem img");

  // esconde todas as imagens
  for (let i = 0; i < imagens.length; i++) {
    imagens[i].style.display = "none";
  }

  // passa para próxima
  indexValue++;

  if (indexValue > imagens.length) {
    indexValue = 1;
  }

  // mostra apenas uma
  imagens[indexValue - 1].style.display = "block";

}

// executa a cada 1.5 segundos
setInterval(slideShow, 5000);


var indexValue2 = 0;

function slideShow2() {

  const imagens2 = document.querySelectorAll(".card-imagem-second img");

  // esconde todas as imagens
  for (let i = 0; i < imagens2.length; i++) {
    imagens2[i].style.display = "none";
  }

  // passa para próxima
  indexValue2++;

  if (indexValue2 > imagens2.length) {
    indexValue2 = 1;
  }

  // mostra apenas uma
  imagens2[indexValue2 - 1].style.display = "block";

}

// executa a cada 1.5 segundos
setInterval(slideShow2, 5000);
