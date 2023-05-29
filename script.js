'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Answer!';
*/
let score = 20;
let highscore = 0;
let guess;
let secretnum = Math.trunc(Math.random() * 20) + 1;
/*document.querySelector('.number').textContent = secretnum;*/
document.querySelector('.check').addEventListener('click', function () {
  guess = Number(document.querySelector('.guess').value);
  console.log(document.querySelector('.guess').value); //Logs input number on console.
  //console.log(typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number.';
  } else if (guess == secretnum) {
    document.querySelector('.message').textContent = 'You guessed it!';
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
      document.querySelector('.number').textContent = secretnum;
      document.querySelector('body').style.backgroundColor = '#FF9999';
      document.querySelector('.number').style.width = '30rem';
    }
  } else if (guess > secretnum) {
    document.querySelector('.message').textContent = 'Too High';
    score--;
  } else {
    document.querySelector('.message').textContent = 'Too low';
    score--;
  }
  document.querySelector('.score').textContent = score;
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    guess = Number(document.querySelector('.guess').value);
    console.log(document.querySelector('.guess').value); //Logs Input number onto console
    //console.log(typeof guess);

    if (!guess) {
      document.querySelector('.message').textContent = 'No number.';
    } else if (guess == secretnum) {
      document.querySelector('.message').textContent = 'You guessed it!';
      if (highscore < score) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
        document.querySelector('.number').textContent = secretnum;
        document.querySelector('body').style.backgroundColor = '#FF9999';
        document.querySelector('.number').style.width = '30rem';
      }
    } else if (guess > secretnum) {
      document.querySelector('.message').textContent = 'Too High';
      score--;
    } else {
      document.querySelector('.message').textContent = 'Too low';
      score--;
    }
    document.querySelector('.score').textContent = score;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretnum = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ' '; //Often mistaken for textContent
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
});
