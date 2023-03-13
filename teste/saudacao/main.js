const saudacao = () =>{
    const horaAgora = new Date().getHours();
    const responder = (saudacao) => console.log(saudacao); // Não está sendo executada e sim guardada
    if(horaAgora <= 12) return responder ('Bom dia'); // se for verdade já retorna o valor correspondente;
    if(horaAgora <= 18) return responder ('Boa tarde'); // se for verdade já retorna o valor correspondente;
    return responder('Boa noite'); // se não retorna esse valor aqui;
}
saudacao();