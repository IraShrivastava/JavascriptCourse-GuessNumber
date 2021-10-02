'use strict';

let secretNumber= Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
console.log(Number(document.querySelector('.guess').value))

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess) 
    console.log(typeof guess)
    //when there is no input
    if(!guess){
        displayMessage('⛔ No Number!')
    }
    //when  player wins
    else if(guess === secretNumber){
        displayMessage('🎉 Correct Number!')
        document.querySelector('.number').textContent = secretNumber;
        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore
        }
        
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width ='30rem'
    }
    //when guess is different
    else if(guess !== secretNumber){
        if(score > 1){
            displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!')
            score--;
            document.querySelector('.score').textContent = score;
        } else{
            displayMessage('💥 You Lost The Game')
            document.querySelector('.score').textContent = 0;
        }
    }
})


document.querySelector('.again').addEventListener('click', function() {
    console.log("again clicked")
    score=20
    secretNumber= Math.trunc(Math.random() * 20) + 1;
    console.log(secretNumber)
    displayMessage('Start guessing...')
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width ='15rem'
})