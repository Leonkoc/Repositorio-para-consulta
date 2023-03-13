const frm = document.querySelector("form");
const letraBreak = document.querySelector(".letraBreak");
const spaceshipName = document.querySelector(".inNome");
const resp1 = document.querySelector("h1");
const resp2 = document.querySelector("h2");
let invertedName = "";

frm.addEventListener("submit", (e) => {
  const spaceshipName = frm.inspaceshipName.value; //obtenho o valor do form na sessão que tem o id  inspaceshipName
  const letraBreak = frm.letraBreak.value;
  ////////////////////////////////////////////////////////////////////////////////////////
  for (let i = spaceshipName.length - 1; i >= 0; i--) {
    if (spaceshipName[i] == "e") {
      break;
    }
    invertedName += spaceshipName[i];
  }
  alert(invertedName);
  console.log(invertedName);
  e.preventDefault();
});
