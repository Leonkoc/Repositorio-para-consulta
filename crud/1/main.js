//Crud javascript puro
const tyiter = {
    usuarios: [
    {
        username: "Leo",
    }
    ],
    posts: [
        {
            criador: 'leon krenak',
            conteudo: 'Meu primeiro post',
        }
    ]
};
//create
function criarPost (criador,conteudo){
    tyiter.posts.push({
        criador,
        conteudo,
    })
}
criarPost({criador:"BrunaPias", conteudo:'Rosas são vermelhas'});
console.log(tyiter.posts)    
//read
//update
//delete