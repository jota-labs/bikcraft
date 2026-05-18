const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
  console.log(url);
}

links.forEach(ativarLink);

//Ativar itens do orçamento

const parametro = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  elemento.checked = true;
  console.log(parametro);
}

parametro.forEach(ativarProduto);

//Perguntas frequentes
const perguntas = document.querySelectorAll(".perguntas button");

ativarPergunta(event){
  const pergunta = event.currentTarget;
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener('click, ativarPergunta')
}

perguntas.forEach(eventosPerguntas);

//galeria de bicicleta
const galeria = document.querySelectorAll(".bicicleta-imagens img")
const galeriaContainer = document.querySelector(".bicicleta-imagens")

function trocarImage(event){
  const img = event.currentTarget;
  galeriaContainer.prepend(img)
}

function eventosGaleria(img){
 img.addEventListener('click', trocarImage)
}
galeria.forEach(eventosGaleria);

