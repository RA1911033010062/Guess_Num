'use strict';
/*
console.log(document.querySelector('.message'));
document.querySelector('.message').textContent = 'Correct NUM!';
*/
let numb = Math.trunc(Math.random() * 20 + 1);
//document.querySelector('.number').textContent = numb;
let score = 20;
let highscore = 0;
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  numb = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start Guessing';
  document.querySelector('body').style.backgroundImage = "url('4.png')";
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
});
document.querySelector('.check').addEventListener('click', function () {
  const x = Number(document.querySelector('.guess').value);
  console.log(x, typeof x);

  if (!x) {
    document.querySelector('.message').textContent = 'Input a number';
  } else if (x == numb) {
    document.querySelector('.message').textContent = 'Yes you guessed it right';
    document.querySelector('body').style.backgroundImage = "url('')";
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = numb;
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (x != numb) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        x > numb ? 'Too high' : 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost';
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
});
