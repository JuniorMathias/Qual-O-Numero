var number = document.getElementById('insertNumber')

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
        number.value = '';
    } else{
        document.getElementById('result').textContent = `errou ${randomNumber}`
        document.getElementById("insertNumber").disabled = false;
        document.getElementById("girar").disabled = true;
        number.value = '';
    }

    if(number.value === ''){
        document.getElementById("#girar").disabled = true;
    }
    return number.value.length = 0;
}

function apostar(){
    if(number.value.length != 0){
        document.getElementById("insertNumber").disabled = true;
        document.getElementById("girar").disabled = false;
    }else{
        document.getElementById('result').textContent = `Choose The Number `
    }
}



