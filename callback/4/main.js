function modify(array, callback){
    //começando alguma coisa
    array.push('midu');
    //depois de fazer alguma coisa
    callback();
}

const names = ['Arthur','Pedro de lara','Cascão','Socrates'];

modify(names,function (){
    console.log('Modifiquei o array');
})