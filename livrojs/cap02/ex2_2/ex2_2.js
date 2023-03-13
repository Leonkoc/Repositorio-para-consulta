//Criando referencia ao form e aos elementos de resposta
const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

//Criando um ouvinte de evento, que vai fofocar quando o submit for feito
frm.addEventListener("submit", (e) => {
  const titulo = frm.inTitulo.value;
  const duracao = Number(frm.inDuracao.value);

  const horas = Math.floor(duracao / 60); //arrendonda para baixo o resultado
  const minutos = duracao % 60; //obtem o resto da divisão

  resp1.innerText = titulo;
  resp2.innerText = `${horas} horas(s) e ${minutos} minutos(s)`;

  e.preventDefault(); //evita o envio do form.
});
