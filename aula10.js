
let nome = prompt("Teste esse nome");
let idade = parseInt(prompt("Entre com a idade"));
let opcao = parseInt(prompt('Entre com a opcao'));

function par(){
    if((idade % 2) == 0 ){
        return  true;
    }else{
        return false;
    }
}
function bissexto(){
    if(((idade % 4) == 0) && ((idade % 100) != 0) || ((idade % 400) == 0)){
        return  true;
    }else{
        return false;
    }
}

switch(opcao){
    case 1:
        if(par()){
            alert('Numero Par');
        }else{
            alert('Numero impar');
        }
        break;
    case 2:
        if(bissexto()){
            alert('Ano bissexto');
        }else{
            alert('Ano nao e bissexto');
        }
        break;
};