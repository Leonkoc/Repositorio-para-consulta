let options = document.getElementById('options');
let btnForm = document.getElementById('submit-form');
let showResult = document.getElementById('show-result');
let entry = document.getElementById('entry');

btnForm.addEventListener ('click', (event) =>{
    let resultado;
    let selectedOption = options.value; // A escolha do usuário cai nessa let
    if(selectedOption == 'celsius_para_fahrenheit'){
        resultado = (parseFloat(entry.value) * 1.8 + 32).toFixed(1); // to fixed para ficar só duas casas decimais
        console.log(`Transformando celsius a fahrenheit`)
    }else if(selectedOption == 'fahrenheit_para_celsius'){
        resultado = ((parseFloat(entry.value) - 32) / 1.8).toFixed(1);
        console.log(`Estou transformando fahrenheit para celsius`)
    }

    showResult.style.display = "block";
    showResult.innerHTML = (resultado);
    event.preventDefault(); // prevenindo o envio do formulário pro back
});