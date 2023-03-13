//Referencia ao form e elementos
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp");

//-----------------------------------------------------------------------------------------
//Ouvinte de evento
frm.addEventListener("submit", (e) => {
  const valorHr = Number(frm.preco.value); //obtenho o conteúdo do campo em questão
  const tempo = Number(frm.tempUso.value);

  const result = valorHr * tempo;

  resp1.innerText = `Valor a pagar: ${result}`;

  e.preventDefault();
});
