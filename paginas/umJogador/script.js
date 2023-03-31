const select1 =document.getElementById("select01");

let botaoAposta = document.getElementById("apostar");

let dado = document.getElementById('face');
var number = document.getElementById('insertNumber')

function valor(){

    if(Number(select1.value) != 0){
        document.getElementById("apostar").disabled = false;
        var num3 = Number(document.getElementById("saldo").value);
        var saldoTotal = document.getElementById("saldo").value = parseFloat(num3 - Number(select1.value)).toFixed(2);

            document.getElementById('valor').disabled = true;

            if(saldoTotal < select1.value || saldoTotal == 0){
                document.getElementById('salds').textContent = "Saldo Insuficiente";
                document.getElementById("valorAposta").disabled = true;
                document.getElementById("insertNumber").disabled = true;

            } else{
                document.getElementById('sald').textContent = "";
            }
        }else if(Number(select1.value) == 0){
        document.getElementById('sald').textContent = `escolha uma aposta`
    }
    
    
}


function apostar(){
    
    if(number.value.length != 0){
        document.getElementById("girar").disabled = false;
        document.getElementById('result').textContent = ` `
    }else{
        document.getElementById('result').textContent = `Choose The Number `
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
    
            document.getElementById('result').textContent = `Choose The Number `
    
        }else if(randomNumber == number.value) {
    
            document.getElementById('result').textContent = `acertou ${randomNumber}`
            document.getElementById("insertNumber").disabled = false;
            botaoAposta.disabled = true;
            document.getElementById("girar").disabled = true;
             document.getElementById('valor').disabled = false;
    
        } else{
    
            document.getElementById('result').textContent = `errou ${randomNumber}`
            number.disabled = false;
            botaoAposta.disabled = true;
            document.getElementById("girar").disabled = true;
            document.getElementById('valor').disabled = false;
    
            number.value = '';
            select1.value = '';
            
        }
    

    
    return number.value.length = 0;
}