let clientes = [
        {id: 1,nome: "Junior",ano: 2020,pagamento: false},
        {id: 2,nome: "Pedro",ano: 2021,pagamento: true},
        {id: 3,nome: "Jobe",ano: 2020,pagamento: true},
        {id: 4,nome: "Clara",ano: 2021,pagamento: false},
        {id: 5,nome: "Joana",ano: 2022,pagamento: true},
        {id: 6,nome: "Moana",ano: 2021,pagamento: true},
]
let pagamentoEmDia =[];
let caloteiro = [];

for(let i = 0; i< clientes.length; i++){
    if(clientes[i].pagamento == true){
        pagamentoEmDia.push(clientes[i].nome)
    }else{
        caloteiro.push(clientes[i].nome)
    }
}
console.log(`Os clientes ${pagamentoEmDia} estão com o pagamento em dia`);
console.log(`Já os clientes ${caloteiro} estão devendo a parcela`);