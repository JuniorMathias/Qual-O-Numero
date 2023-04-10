//inputs

let select1 =document.getElementById("select01");
var number = document.getElementById('insertNumber');
let dado = document.getElementById('face');

let select2 =document.getElementById("select02");
var number2 = document.getElementById('insertNumber2');
let dado2 = document.getElementById('face2');

//botoes
let valorAposta = document.getElementById('valor');
let valorAposta2 = document.getElementById('valor2');

let botaoAposta = document.getElementById("apostar");
let botaoAposta2 = document.getElementById("apostar2");

let girarDado = document.getElementById("girar");

// mostrar mensagem de resultados
let mostrarMensagem = document.getElementById('result');
let mostrarMensagem2 = document.getElementById('result2');
let jogador = document.getElementById('jogador');

//contador de tentativas
var counterVal = 0;
var counterVal2 = 0;


function valor(){

    if(Number(select1.value) != 0){
        var num3 = Number(document.getElementById("saldo").value);
        var saldoTotal = document.getElementById("saldo").value = parseFloat(num3 - Number(select1.value)).toFixed(2);
        valorAposta.disabled = true;
        botaoAposta.disabled = false;
        mostrarMensagem2.textContent = ``
        
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
                atualizar.style.display = 'block';
                document.getElementById("valorAposta").disabled = true;
                number.disabled = true;
            } else{
                mostrarMensagem.textContent = "";
            }
    }else if(Number(select1.value) == 0){
        mostrarMensagem.textContent = `ESCOLHA UM VALOR PARA APOSTAR.`
    }
}

//função para mostrar as tentativas

function updateDisplay(val) {
   document.getElementById("counter-label").innerHTML = val;
   document.getElementById("counter-label2").innerHTML = val;
}

//função para mostrar o número da aposta

function apostar(){
    
    if(number.value.length != 0){
        valorAposta2.disabled = false;
        mostrarMensagem.textContent = ` `
    }else{
        mostrarMensagem.textContent = `Escolha um número para adivinhar `
    }
}

// jogador número dois

function valor2(){
   
    if(Number(select2.value) != 0){
        var num3 = Number(document.getElementById("saldo2").value);
        var saldoTotal = document.getElementById("saldo2").value = parseFloat(num3 - Number(select2.value)).toFixed(2);
        valorAposta2.disabled = true;
        botaoAposta2.disabled = false;
        mostrarMensagem.textContent = ``
        
        // desabilita as opções de select1 com valor maior que o saldoTotal
            for (var i = 0; i < select2.options.length; i++) {
                var optionValue = Number(select2.options[i].value);
                if (optionValue > saldoTotal) {
                  select2.options[i].disabled = true;
                } else {
                  select2.options[i].disabled = false;
                }
            }

            if(saldoTotal == 0){
                atualizar.style.display = 'block';
                document.getElementById("valorAposta").disabled = true;
                number.disabled = true;
            } else{
                mostrarMensagem2.textContent = "";
            }
    }else if(Number(select2.value) == 0){
        mostrarMensagem2.textContent = `Escolha um valor para Apostar.`
    }
}

//função para mostrar as tentativas jogador 2

function updateDisplay2(val) {
    document.getElementById("counter-label2").innerHTML = val;
 }

 // botão de apostar
 function apostar2(){
    
    if(number2.value.length != 0){
        girarDado.disabled = false;
        mostrarMensagem2.textContent = ` `
    }else{
        mostrarMensagem2.textContent = `Escolha um número para adivinhar `
    }
}


//função para mostrar a face do dado 

function girar(){
    var randomNumber = Math.floor(Math.random()*6) + 1
    updateDisplay(++counterVal);
    switch(randomNumber) {
        case 1:
            setTimeout(() => {
                dado.src = "/img/dados/dice1.png";
            }, 3000);
            dado.src = "/img/dadogirando.gif";
            break;
        case 2:
            setTimeout(() => {
                dado.src = "/img/dados/dice2.png";
            }, 3000);
            dado.src = "/img/dadogirando.gif";
            break;
        case 3:
            setTimeout(() => {
                dado.src = "/img/dados/dice3.png";
            }, 3000);
            dado.src = "/img/dadogirando.gif";
            break;
        case 4:
            setTimeout(() => {
                dado.src = "/img/dados/dice4.png";
            }, 3000);
            dado.src = "/img/dadogirando.gif";
            break;
        case 5:
            setTimeout(() => {
                dado.src = "/img/dados/dice5.png";
            }, 3000);
            dado.src = "/img/dadogirando.gif";
            break;
        case 6:
            setTimeout(() => {
                dado.src = "/img/dados/dice6.png";
            }, 3000);
            dado.src = "/img/dadogirando.gif";
            break;
        default:
            dado.src = "/img/dadogirando.gif";
            break;
    }


    //SALDOS INICIAIS DOS JOGADORES E CASA
    let saldoAtualCasa = parseFloat(document.getElementById("saldo0").value);
    let saldoAtualUm = parseFloat(document.getElementById("saldo").value);
    let saldoAtualDois = parseFloat(document.getElementById("saldo2").value);
    // apostador um 
    setTimeout(() => {
    if(randomNumber == number.value) {
        
        mostrarMensagem.textContent = `acertou apostou no nº ${number.value} e o número sorteado foi ${randomNumber}`
        saldoAtualUm += parseFloat(select1.value) + parseFloat(select1.value);
        document.getElementById("saldo").value = saldoAtualUm.toFixed(2);
        saldoAtualCasa -= parseFloat(select1.value)
        document.getElementById("saldo0").value = saldoAtualCasa.toFixed(2);
        
        

    } else{
        mostrarMensagem.textContent = `ERROU! apostou no nº ${number.value} e o número sorteado foi ${randomNumber}`
        saldoAtualCasa += parseFloat(select1.value)
        document.getElementById("saldo0").value = saldoAtualCasa.toFixed(2);
    }

    //apostador dois
    if(randomNumber == number2.value) {
        mostrarMensagem2.textContent = `acertou apostou no nº ${number2.value} e o número sorteado foi ${randomNumber}`
        saldoAtualDois += parseFloat(select2.value) + parseFloat(select2.value);
        document.getElementById("saldo2").value = saldoAtualDois.toFixed(2);
        saldoAtualCasa -= parseFloat(select2.value)
        document.getElementById("saldo0").value = saldoAtualCasa.toFixed(2);

    } else{
        mostrarMensagem2.textContent = `ERROU! apostou no nº ${number2.value} e o número sorteado foi ${randomNumber}`
        let saldoAtualCasa = parseFloat(document.getElementById("saldo0").value);
        saldoAtualCasa += parseFloat(select2.value)
        document.getElementById("saldo0").value = saldoAtualCasa.toFixed(2);
    }
    select1.value = '';
    select2.value = '';

    number.value = '';
    number2.value = '';
    }, 3000);
    girarDado.disabled = true;
    valorAposta.disabled = false;
    botaoAposta.disabled = true;

    valorAposta2.disabled = true;    
    botaoAposta2.disabled = true;

    
       
}

