//cria referencia ao form e ao elemento h3
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

//criar um ouvinte de evento, acionado quando o botão submit for cliclado
frm.addEventListener("submit", (e) => {
  const nome = frm.inNome.value; // obtem o nome digitado no form
  resp.innerText = `Olá ${nome} `; //exibe a resposta do programa
  e.preventDefault();
});
