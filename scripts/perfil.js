

// 1. Pega o ID na URL
const parametros = new URLSearchParams(window.location.search);
const idBuscado = parametros.get("id");

// 2. Busca a mulher no array do arquivo dados_perfil.js
const mulher = detalhes_mulheres.find(item => item.id == idBuscado);

// 3. Preenche os dados na tela
if (mulher) {
  // Preenche a introdução
document.querySelector("#img-fundo").src = mulher.img;
  document.querySelector("#nome-principal").innerText = mulher.nome;
  document.querySelector("#citacao-principal").innerText = mulher.citacao;
  
  // Preenche os nomes no menu interno e no título da seção
  document.querySelector("#nome-menu-1").innerText = mulher.nome;
  document.querySelector("#nome-menu-2").innerText = mulher.nome;
  document.querySelector("#nome-titulo").innerText = mulher.nome;
  
  // Preenche a biografia (usando innerHTML para ler as tags <p>)
  document.querySelector("#texto-biografia").innerHTML = mulher.biografia;
  
} else {
  // O que mostrar se o ID não existir na URL
  document.querySelector("main").innerHTML = `
    <div style="text-align: center; padding: 100px 20px;">
      <h1>Perfil não encontrado 😕</h1>
      <p>A trajetória que você procura não está disponível.</p>
      <a href="index.html" class="botao-contato">Voltar para o Início</a>
    </div>
  `;
}



