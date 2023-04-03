let select1 =document.getElementById("select01");
let girarDado = document.getElementById("girar");

let botaoAposta = document.getElementById("apostar");

let dado = document.getElementById('face');
var number = document.getElementById('insertNumber');
let mostrarMensagem = document.getElementById('result');
let msgAposta = document.getElementById('result');
let saldoInsuficiente = document.getElementById('salds');
let valorAposta = document.getElementById('valor');
let flork = document.getElementById('imgErrar');
var counterVal = 0;


function valor(){

    if(Number(select1.value) != 0){
        var num3 = Number(document.getElementById("saldo").value);
        var saldoTotal = document.getElementById("saldo").value = parseFloat(num3 - Number(select1.value)).toFixed(2);
        valorAposta.disabled = true;
        botaoAposta.disabled = false;
        flork.src = "";
        
        // desabilita as opções de select1 com valor maior que o saldoTotal
            for (var i = 0; i < select1.options.length; i++) {
                var optionValue = Number(select1.options[i].value);
                if (optionValue > saldoTotal) {
                  select1.options[i].disabled = true;
                } else {
                  select1.options[i].disabled = false;
                }
            }

            if(saldoTotal == 0){
                saldoInsuficiente.textContent = "Saldo Insuficiente";
                document.getElementById("valorAposta").disabled = true;
                number.disabled = true;
            } else{
                msgAposta.textContent = "";
            }
    }else if(Number(select1.value) == 0){
        msgAposta.textContent = `Escolha um valor para Apostar.`
    }
    
    
}


//função para mostrar as tentativas

function updateDisplay(val) {
   let contar = document.getElementById("counter-label").innerHTML = val;
   switch(contar){
    case 1:
        flork.src = "/img/errou.png";
        break;
    case 2:
        flork.src = "/img/errou1.png";
        break;
    case 3:
        flork.src = "/img/gameover.png";
        break;
    case 4:
        flork.src = "/img/aposte.png";
        break;
    default:
        flork.src = "/img/errou.png";
}
}

//função para mostrar o número da aposta

function apostar(){
    
    if(number.value.length != 0){
        girarDado.disabled = false;
        mostrarMensagem.textContent = ` `
    }else{
        mostrarMensagem.textContent = `Escolha um número para adivinhar `
    }
}

//função para mostrar a face do dado 

function girar(){
    var randomNumber = Math.floor(Math.random()*6) + 1
    updateDisplay(++counterVal);
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
    
            mostrarMensagem.textContent = `Escolha um número para adivinhar `
    
        }else if(randomNumber == number.value) {
    
            let saldoAtual = parseFloat(document.getElementById("saldo").value);
            mostrarMensagem.textContent = `acertou ${randomNumber}`
            document.getElementById("counter-label").innerHTML = 0;
            number.disabled = false;
            saldoAtual += parseFloat(select1.value) + parseFloat(select1.value);
            document.getElementById("saldo").value = saldoAtual.toFixed(2);
            flork.src = "/img/acertou.png";
            botaoAposta.disabled = true;
            girarDado.disabled = true;
            valorAposta.disabled = false;
            number.value = '';
            select1.value = '';
    
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