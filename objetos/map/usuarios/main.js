let usuarios = [
    {id: 1, name:"João", age: 36},
    {id: 2, name:"Felix", age: 25},
    {id: 3, name:"Joana", age: 57}
];
//tenho um array de objetos, com dados de clientes;
let names = usuarios.map(function(usuario) {
    return usuario.name;
});
console.log(names);

let colaboradores = [
    {id: 1, name:"João", funcao: "ti", salario: 3.500},
    {id: 2, name:"Felix", funcao: "ux", salario: 2.900},
    {id: 3, name:"Joana", funcao: "recruit", salario: 2.500}
];