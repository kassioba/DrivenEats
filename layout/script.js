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
  const zap = document.querySelector("a");

  const urlDecoded =
    "Olá, gostaria de fazer o pedido: \n- Prato: Frango Yin Yang \n- Bebida: Coquinha Gelada \n- Sobremesa: Pudim \nTotal: R$ 27.70";
  const zapLink =
    "https://wa.me/5581996060365?text=" + encodeURIComponent(urlDecoded);

  if ((seleção1 && seleção2 && seleção3) !== null) {
    botão.classList.add("botão-ativado");
    botão.removeAttribute("disabled");
    botão.innerHTML = "Fechar pedido";
    zap.setAttribute("href", zapLink);
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
  const zap = document.querySelector("a");

  const urlDecoded =
    "Olá, gostaria de fazer o pedido: \n- Prato: Frango Yin Yang \n- Bebida: Coquinha Gelada \n- Sobremesa: Pudim \nTotal: R$ 27.70";
  const zapLink =
    "https://wa.me/5581996060365?text=" + encodeURIComponent(urlDecoded);

  if ((seleção1 && seleção2 && seleção3) !== null) {
    botão.classList.add("botão-ativado");
    botão.removeAttribute("disabled");
    botão.innerHTML = "Fechar pedido";
    zap.setAttribute("href", zapLink);
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
  const zap = document.querySelector("a");

  const urlDecoded =
    "Olá, gostaria de fazer o pedido: \n- Prato: Frango Yin Yang \n- Bebida: Coquinha Gelada \n- Sobremesa: Pudim \nTotal: R$ 27.70";
  const zapLink =
    "https://wa.me/5581996060365?text=" + encodeURIComponent(urlDecoded);

  if ((seleção1 && seleção2 && seleção3) !== null) {
    botão.classList.add("botão-ativado");
    botão.removeAttribute("disabled");
    botão.innerHTML = "Fechar pedido";
    zap.setAttribute("href", zapLink);
  }
}