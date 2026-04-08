let indiceAtual = 0; // O nosso contador que começa na Lélia

function atualizarCard() {
  // Definimos as 3 mulheres da "janela" atual
  const m1 = lista_mulheres[indiceAtual];
  const m2 = lista_mulheres[(indiceAtual + 1) % lista_mulheres.length];
  const m3 = lista_mulheres[(indiceAtual + 2) % lista_mulheres.length];

  // Agora distribuímos as informações da m1 nos IDs terminais "-1"
  document.getElementById("mulher-nome-1").innerHTML = m1.nome;
  document.getElementById("mulher-foto-1").src = m1.imagem;
  document.getElementById("mulher-bio-1").innerHTML = m1.bio;
  document.getElementById("mulher-tempo-1").innerHTML = m1.tempo;

  // E fazemos o mesmo para a m2 nos IDs "-2"...
  document.getElementById("mulher-nome-2").innerHTML = m2.nome;
  document.getElementById("mulher-foto-2").src = m2.imagem;
  document.getElementById("mulher-bio-2").innerHTML = m2.bio;
  document.getElementById("mulher-tempo-2").innerHTML = m2.tempo;

  document.getElementById("mulher-nome-3").innerHTML = m3.nome;
  document.getElementById("mulher-foto-3").src = m3.imagem;
  document.getElementById("mulher-bio-3").innerHTML = m3.bio;
  document.getElementById("mulher-tempo-3").innerHTML = m3.tempo;
}

// Chamando a função uma vez para carregar a primeira mulher assim que o site abre
atualizarCard();

function proximaMulher() {
  indiceAtual += 3;

  if (indiceAtual >= lista_mulheres.length) {
    indiceAtual = 0;
  }

  atualizarCard();
}

// BOTAO DE PAUSAR O CARD
let carroselAtivo = true; // variável booleana que representa o estado atual do carrossel (ligado ou desligado).

let intervalo = setInterval(proximaMulher, 5000); // variavel que declara que as proximas mulheres aparecerão após 5 segundos

const botao = document.getElementById("btn-pause"); // Cria uma variável que guarda o botão do HTML para que possamos usar ele no JavaScript sem precisar buscá-lo toda hora.

botao.addEventListener("click", function () {
  //gatilho para que inicie o if, esse gatilho acontece através do click do lado direito do mouse.
  if (carroselAtivo === true) {
    // Verifica o estado atual do sistema no momento do clique
    // PAUSAR
    clearInterval(intervalo);
    carroselAtivo = false; // O carrosel que antes estava ativo, passe a estar inativo
    botao.textContent = "Retomar"; // O texto do botão agora reflete a próxima ação possível
  } else {
    //se carroselAtivo nao for === true, rode a senteça abaixo

    proximaMulher(); // Essa linha executa imediatamente a troca de mulher. Serve para não esperar 5 segundos ao retomar. Não é resetar, é forçar uma execução instantânea
    intervalo = setInterval(proximaMulher, 5000); //Recria o intervalo porque o anterior foi cancelado
    carroselAtivo = true; // carrosel voltar a estar ativo
    botao.textContent = "Pausar"; //botao deixa de se chamar retomar e passa a se chamar pausar
  }
});

const cards = document.querySelector(".cards");
const btnProximo = document.getElementById("btn-proximo");
const btnAnterior = document.getElementById("btn-anterior");

let animando = false;
const DURACAO = 350;

/* AVANÇAR */
btnProximo.addEventListener("click", () => {
  if (animando) return;
  animando = true;

  cards.classList.add("slide-right");

  setTimeout(() => {
    indiceAtual += 3;

    if (indiceAtual >= lista_mulheres.length) {
      indiceAtual = 0;
    }

    atualizarCard();

    cards.classList.remove("slide-right");
    animando = false;
  }, DURACAO);
});

/* VOLTAR */
btnAnterior.addEventListener("click", () => {
  if (animando) return;
  animando = true;

  cards.classList.add("slide-left");

  setTimeout(() => {
    indiceAtual -= 3;

    if (indiceAtual < 0) {
        indiceAtual = lista_mulheres.length - 3;
    }

    atualizarCard();

    cards.classList.remove("slide-left");
    animando = false;
  }, DURACAO);
});

window.addEventListener("load", () => {
  iniciarCarrossel();
});
