
var btn = document.querySelector('.btn');
var nome = document.querySelector('.nome');
var email = document.querySelector('.email');
var desc = document.querySelector('.desc');

obj = {nome: nome.value, email:email.value, desc:desc.value};
// dados = [];

function validacao(obj){
    // alert('Nome: '+ nome.value + " email: " + email.value + " desc: " + desc.value)
   for(let i in obj){
    console.log(obj[i]);       
   }
    return dados;
}


function limpar(nome, email, desc){
    nome.value = '';
    email.value = '';
    desc.value = '';
}


btn.addEventListener('click', validacao, false);
