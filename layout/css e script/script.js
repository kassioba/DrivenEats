function selecionarComida(clicado, clicadoSimbolo) {
  const selecionadoAntes = document.querySelector(".fileira1 .selecionado");
  const selecionadoSimAntes = document.querySelector(".fileira1 .ativado");

  if (selecionadoAntes !== null) {
    selecionadoAntes.classList.remove("selecionado");
    selecionadoSimAntes.classList.remove("ativado");
  }

  const selecionado = document.querySelector(clicado);

  selecionado.classList.add("selecionado");

  const simbolo = document.querySelector(clicadoSimbolo);

  simbolo.classList.add("ativado");

  const seleção1 = document.querySelector(".fileira1 .selecionado");
  const seleção2 = document.querySelector(".fileira2 .selecionado");
  const seleção3 = document.querySelector(".fileira3 .selecionado");
  const botão = document.querySelector(".botão-desativado");

  if ((seleção1 && seleção2 && seleção3) !== null) {
    botão.classList.add("botão-ativado");
    botão.removeAttribute("disabled");
    botão.innerHTML = "Fechar pedido";
  }
}

function selecionarComida2(clicado, clicadoSimbolo) {
  const selecionadoAntes = document.querySelector(".fileira2 .selecionado");
  const selecionadoSimAntes = document.querySelector(".fileira2 .ativado");

  if (selecionadoAntes !== null) {
    selecionadoAntes.classList.remove("selecionado");
    selecionadoSimAntes.classList.remove("ativado");
  }

  const selecionado = document.querySelector(clicado);

  selecionado.classList.add("selecionado");

  const simbolo = document.querySelector(clicadoSimbolo);

  simbolo.classList.add("ativado");

  const seleção1 = document.querySelector(".fileira1 .selecionado");
  const seleção2 = document.querySelector(".fileira2 .selecionado");
  const seleção3 = document.querySelector(".fileira3 .selecionado");
  const botão = document.querySelector(".botão-desativado");

  if ((seleção1 && seleção2 && seleção3) !== null) {
    botão.classList.add("botão-ativado");
    botão.removeAttribute("disabled");
    botão.innerHTML = "Fechar pedido";
  }
}

function selecionarComida3(clicado, clicadoSimbolo) {
  const selecionadoAntes = document.querySelector(".fileira3 .selecionado");
  const selecionadoSimAntes = document.querySelector(".fileira3 .ativado");

  if (selecionadoAntes !== null) {
    selecionadoAntes.classList.remove("selecionado");
    selecionadoSimAntes.classList.remove("ativado");
  }

  const selecionado = document.querySelector(clicado);

  selecionado.classList.add("selecionado");

  const simbolo = document.querySelector(clicadoSimbolo);

  simbolo.classList.add("ativado");

  const seleção1 = document.querySelector(".fileira1 .selecionado");
  const seleção2 = document.querySelector(".fileira2 .selecionado");
  const seleção3 = document.querySelector(".fileira3 .selecionado");
  const botão = document.querySelector(".botão-desativado");

  if ((seleção1 && seleção2 && seleção3) !== null) {
    botão.classList.add("botão-ativado");
    botão.removeAttribute("disabled");
    botão.innerHTML = "Fechar pedido";
  }
}

function checkout() {
  const checkout = document.querySelector(".checkout-bg");
  checkout.classList.add("ativado");

  const pratoEscolhido = document.querySelector(
    ".fileira1 .selecionado .nome-comida"
  );
  const bebidaEscolhida = document.querySelector(
    ".fileira2 .selecionado .nome-comida"
  );
  const sobremesaEscolhida = document.querySelector(
    ".fileira3 .selecionado .nome-comida"
  );

  const valorPrato = document.querySelector(
    ".fileira1 .selecionado .preco-numero"
  );
  const valorBebida = document.querySelector(
    ".fileira2 .selecionado .preco-numero"
  );
  const valorSobremesa = document.querySelector(
    ".fileira3 .selecionado .preco-numero"
  );

  document.querySelector(".confirmar-nome-comida").innerHTML =
    pratoEscolhido.textContent;
  document.querySelector(".confirmar-preco-comida").innerHTML =
    valorPrato.textContent;

  document.querySelector(".confirmar-nome-bebida").innerHTML =
    bebidaEscolhida.textContent;
  document.querySelector(".confirmar-preco-bebida").innerHTML =
    valorBebida.textContent;

  document.querySelector(".confirmar-nome-sobremesa").innerHTML =
    sobremesaEscolhida.textContent;
  document.querySelector(".confirmar-preco-sobremesa").innerHTML =
    valorSobremesa.textContent;

  const valorTotal =
    Number(valorPrato.textContent.replace(",", ".")) +
    Number(valorBebida.textContent.replace(",", ".")) +
    Number(valorSobremesa.textContent.replace(",", "."));

  document.querySelector(".confirmar-preco-total").innerHTML = `R$ ${valorTotal
    .toFixed(2)
    .replace(".", ",")}`;
}

let nomeCliente;
let endereçoCliente;

function nomeEndereço() {
  nomeCliente = prompt("Qual é o seu nome?");
  endereçoCliente = prompt("Qual é o seu endereço?");
}

function mensagem() {
  const zap = document.querySelector("a");

  const pratoEscolhido = document.querySelector(
    ".fileira1 .selecionado .nome-comida"
  );
  const bebidaEscolhida = document.querySelector(
    ".fileira2 .selecionado .nome-comida"
  );
  const sobremesaEscolhida = document.querySelector(
    ".fileira3 .selecionado .nome-comida"
  );

  const valorPrato = document.querySelector(
    ".fileira1 .selecionado .preco-numero"
  );
  const valorBebida = document.querySelector(
    ".fileira2 .selecionado .preco-numero"
  );
  const valorSobremesa = document.querySelector(
    ".fileira3 .selecionado .preco-numero"
  );

  const valorTotal =
    Number(valorPrato.textContent.replace(",", ".")) +
    Number(valorBebida.textContent.replace(",", ".")) +
    Number(valorSobremesa.textContent.replace(",", "."));

  const urlDecoded = `Olá, gostaria de fazer o pedido:\n- Prato: ${
    pratoEscolhido.textContent
  }\n- Bebida: ${bebidaEscolhida.textContent}\n- Sobremesa: ${
    sobremesaEscolhida.textContent
  }\nTotal: R$ ${valorTotal.toFixed(
    2
  )}\n\nNome: ${nomeCliente}\nEndereço: ${endereçoCliente}`;
  const zapLink =
    "https://wa.me/5511999999999?text=" + encodeURIComponent(urlDecoded);

  zap.setAttribute("href", zapLink);
}
function cancelar() {
  document.querySelector(".checkout-bg").classList.remove("ativado");
}
