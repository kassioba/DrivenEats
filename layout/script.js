function selecionarComida(clicado, clicadoSimbolo) {
  const selecionadoAntes = document.querySelector(".selecionado1");
  const selecionadoSimAntes = document.querySelector(".ativado1");

  if (selecionadoAntes !== null) {
    selecionadoAntes.classList.remove("selecionado1");
    selecionadoSimAntes.classList.remove("ativado1");
  }

  const selecionado = document.querySelector(clicado);

  selecionado.classList.add("selecionado1");

  const simbolo = document.querySelector(clicadoSimbolo);

  simbolo.classList.add("ativado1");
}
function selecionarComida2(clicado, clicadoSimbolo) {
  const selecionadoAntes = document.querySelector(".selecionado2");
  const selecionadoSimAntes = document.querySelector(".ativado2");

  if (selecionadoAntes !== null) {
    selecionadoAntes.classList.remove("selecionado2");
    selecionadoSimAntes.classList.remove("ativado2");
  }

  const selecionado = document.querySelector(clicado);

  selecionado.classList.add("selecionado2");

  const simbolo = document.querySelector(clicadoSimbolo);

  simbolo.classList.add("ativado2");
}
function selecionarComida3(clicado, clicadoSimbolo) {
  const selecionadoAntes = document.querySelector(".selecionado3");
  const selecionadoSimAntes = document.querySelector(".ativado3");

  if (selecionadoAntes !== null) {
    selecionadoAntes.classList.remove("selecionado3");
    selecionadoSimAntes.classList.remove("ativado3");
  }

  const selecionado = document.querySelector(clicado);

  selecionado.classList.add("selecionado3");

  const simbolo = document.querySelector(clicadoSimbolo);

  simbolo.classList.add("ativado3");
}
