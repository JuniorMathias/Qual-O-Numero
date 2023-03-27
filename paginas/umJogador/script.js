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
        alert('Choose the number')
        document.getElementById('result').textContent = `Choose The Number `
    } else  if(randomNumber == number.value) {
        alert('You are Right ')
    } else{
        alert('You are wrong  ' + randomNumber)
        document.getElementById('result').textContent = `Come on try again, I was thinking about the number ${randomNumber}`
    }
}

function apostar(){
    let randomNumber = girar();
    
   
}



