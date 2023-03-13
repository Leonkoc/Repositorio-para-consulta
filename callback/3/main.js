function newBtn (text){
    const $body = document.querySelector("body");
    const $btn = document.createElement("button");
    $btn.textContent = text;
    $body.insertAdjacentElement("beforeEnd", $btn);
}

addEventListener('click', ()=>{
    console.log('botao foi clicado eimm')
})

newBtn('login');
newBtn('Sigup');