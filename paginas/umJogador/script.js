let select1 =document.getElementById("select01");
let girarDado = document.getElementById("girar");

let botaoAposta = document.getElementById("apostar");

let dado = document.getElementById('face');
var number = document.getElementById('insertNumber');
let mostrarMensagem = document.getElementById('result');
let msgAposta = document.getElementById('result');
let saldoInsuficiente = document.getElementById('salds');
let valorAposta = document.getElementById('valor');

function valor(){

    if(Number(select1.value) != 0){
        document.getElementById("apostar").disabled = false;
        var num3 = Number(document.getElementById("saldo").value);
        var saldoTotal = document.getElementById("saldo").value = parseFloat(num3 - Number(select1.value)).toFixed(2);

            valorAposta.disabled = true;

            if(saldoTotal < select1.value || saldoTotal == 0){
                saldoInsuficiente.textContent = "Saldo Insuficiente";
                document.getElementById("valorAposta").disabled = true;
                number.disabled = true;

            } else{
                msgAposta.textContent = "";
            }
        }else if(Number(select1.value) == 0){
        msgAposta.textContent = `escolha uma aposta`
    }
    
    
}


function apostar(){
    
    if(number.value.length != 0){
        girarDado.disabled = false;
        mostrarMensagem.textContent = ` `
    }else{
        mostrarMensagem.textContent = `Choose The Number `
    }
}


function girar(){
    var randomNumber = Math.floor(Math.random()*6) + 1
    switch(randomNumber){
        case 1:
            dado.src = "/img/dados/dice1.png";
            break;
        case 2:
            dado.src = "/img/dados/dice2.png";
            break;
        case 3:
            dado.src = "/img/dados/dice3.png";
            break;
        case 4:
            dado.src = "/img/dados/dice4.png";
            break;
        case 5:
            dado.src = "/img/dados/dice5.png";
            break;
        case 6:
            dado.src = "/img/dados/dice6.png";
            break;
        default:
    }

        if(number.value.length == 0){
    
            mostrarMensagem.textContent = `Choose The Number `
    
        }else if(randomNumber == number.value) {
    
            mostrarMensagem.textContent = `acertou ${randomNumber}`
            document.getElementById("insertNumber").disabled = false;
            botaoAposta.disabled = true;
            girarDado.disabled = true;
             valorAposta.disabled = false;
    
        } else{
    
            mostrarMensagem.textContent = `errou ${randomNumber}`
            number.disabled = false;
            botaoAposta.disabled = true;
            girarDado.disabled = true;
            valorAposta.disabled = false;
    
            number.value = '';
            select1.value = '';
            
        }
    

    
    return number.value.length = 0;
}