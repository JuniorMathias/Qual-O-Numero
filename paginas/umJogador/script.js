function button(){
    var number = document.getElementById('insertNumber')
    var randomNumber = Math.floor(Math.random()*6) + 1
    var img = document.getElementById('imgWainting')
    if(number.value.length == 0){
        alert('Choose the number')
        document.getElementById('result').textContent = `Choose The Number `
    } else  if(randomNumber == number.value) {
        alert('You are Right ')
        document.getElementById('result').textContent = `How did you know ? I was thinking about the number ${randomNumber}`
        img.src = 'surprise.png'
    } else{
        alert('You are wrong ')
        document.getElementById('result').textContent = `Come on try again, I was thinking about the number ${randomNumber}`
        img.src ='happy.png'
    }
}
