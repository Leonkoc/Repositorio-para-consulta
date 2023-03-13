let estoque = [
    {produto:"Boneca", preco:25.00, quantidade:10},
    {produto:"Bola", preco:30.00, quantidade:5},
    {produto:"hotwewewe", preco:150.00,quantidade:7},
]

let verificarEstoque = () => {
    estoque.forEach(item => {
        console.log(`Produto: ${item.produto} - Estoque: ${item.quantidade}`);
    });
}
verificarEstoque()

let adicionarEstoque = (produto, quantidade) => {
    estoque.forEach((item) => {
        if(item.produto === produto){
            item.quantidade += quantidade;
        }
    });
}

adicionarEstoque("Boneca",11);
