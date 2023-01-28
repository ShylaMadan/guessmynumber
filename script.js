'use strict';
/*
console.log(document.querySelector('.message').textContent);
//element selection using DOM
//DOM stands for document object model: structured representation of html
//dom is not part of js.....dom !== js
//dom is part of web api's(application programming interface)
//web apis are libraries written in js and already present
//other apis like timers and fetch

document.querySelector('.message').textContent = 'correct number!';
console.log(document.querySelector('.message').textContent);
//the .message is name of the class used in html doc
document.querySelector('.number').textContent = 13;
console.log(document.querySelector('.guess').value);

*/

let secretNumber = Math.trunc(Math.random() * 20) + 1; // the *20 doesnot give 20 itself

let score = 20;

let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number! :(';
  } else if (guess === secretNumber) {
    displayMessage('CORRECT NUMBER!!');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too high 📈';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' YOU LOST THE GAME 💥';
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too low 📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' YOU LOST THE GAME 💥';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
