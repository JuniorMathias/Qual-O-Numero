var number = document.getElementById('insertNumber')
const select1 =document.getElementById("select01");

function valor(){

    if(Number(select1.value) != 0){
        document.getElementById("apostar").disabled = false;
        var num3 = Number(document.getElementById("saldo").value);
        var saldoTotal = document.getElementById("saldo").value = parseFloat(num3 - Number(select1.value)).toFixed(2);
        if(saldoTotal < select1.value){
            document.getElementById('salds').textContent = "sem saldo";

        }
            if(saldoTotal <= 0){
                document.getElementById('sald').textContent = `zero `
                document.getElementById("valorAposta").disabled = true;
                document.getElementById("insertNumber").disabled = true;
            }
        }else if(Number(select1.value) == 0){
            document.getElementById('sald').textContent = `escolha uma aposta`
        }
    
    
}


function apostar(){
    
    if(number.value.length != 0){
        document.getElementById("insertNumber").disabled = true;
        document.getElementById("girar").disabled = false;
    }else{
        document.getElementById('result').textContent = `Choose The Number `
    }
}


function girar(){
    var randomNumber = Math.floor(Math.random()*6) + 1
    switch(randomNumber){
        case 1:
            document.getElementById('face').src = "/img/dados/dice1.png";
            break;
        case 2:
            document.getElementById('face').src = "/img/dados/dice2.png";
            break;
        case 3:
            document.getElementById('face').src = "/img/dados/dice3.png";
            break;
        case 4:
            document.getElementById('face').src = "/img/dados/dice4.png";
            break;
        case 5:
            document.getElementById('face').src = "/img/dados/dice5.png";
            break;
        case 6:
            document.getElementById('face').src = "/img/dados/dice6.png";
            break;
        default:
    }

        if(number.value.length == 0){
    
            document.getElementById('result').textContent = `Choose The Number `
    
        }else if(randomNumber == number.value) {
    
            document.getElementById('result').textContent = `acertou ${randomNumber}`
            document.getElementById("insertNumber").disabled = false;
            document.getElementById("girar").disabled = true;
    
        } else{
    
            document.getElementById('result').textContent = `errou ${randomNumber}`
            document.getElementById("insertNumber").disabled = false;
            document.getElementById("girar").disabled = true;
    
            number.value = '';
            select1.value = '';
            
        }
    

    
    return number.value.length = 0;
}