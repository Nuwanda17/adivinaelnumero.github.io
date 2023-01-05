'use strict';

// This generate a random number between 1 and 20

let secretNumber = Math.trunc (Math.random()*20) + 1;
let score = 20;
let highscore = 0;

// this gives functionality to the check button

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener ('click', function () {
    const guess = Number (document.querySelector('.guess').value);
    // logical of the game
    // when there is no input

    if (!guess) {
        displayMessage ('⛔️ No ingresaste un número!');

    // when player wins
    } else if (guess === secretNumber) {
        displayMessage('🎉 Adivinaste el número!');
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';


    //when player is wrong
    } else if (guess != secretNumber) {
        if (score > 1) {
            displayMessage (guess > secretNumber ? '📈 Numero muy alto!' :'📉 Número muy bajo!');
            score--;
            document.querySelector ('.score').textContent = score;
        } else {
            displayMessage('💥 Perdiste, perdiste pronto ganarás!')
        }
    }
})

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
  
    displayMessage('Empieza a adivinar...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
  
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });

