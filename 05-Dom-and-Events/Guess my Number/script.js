'use strict';

/*
//How to select and element, manipulate
console.log(document.querySelector('.message').textContent)

document.querySelector('.message').textContent = 'Correct Number'
console.log(document.querySelector('.message').textContent)

document.querySelector('.number').textContent = 13
document.querySelector('.score').textContent = 10

document.querySelector('.guess').value = 15 //as it is input field
console.log(document.querySelector('.guess').value)//as it is input field
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 15;
let highScore = 0;
document.querySelector('.score').textContent = score;


//Before Refactoring
// document.querySelector('.check').addEventListener('click', function () {
//     const guess = Number((document.querySelector('.guess').value));
//     console.log(guess, typeof guess)

//     //When there is no input
//     if (!guess) {
//         document.querySelector('.message').textContent = '⛔️ No Number';

//         //When player wins
//     } else if (guess === secretNumber) {
//         document.querySelector('.number').textContent = secretNumber;
//         document.querySelector('.message').textContent = 'Correct Number';
//         document.querySelector('body').style.backgroundColor = '#60b347';
//         document.querySelector('.number').style.width = '30rem';

//         if (score > highScore) {
//             highScore = score;
//             document.querySelector('.highscore').textContent = highScore;
//         }

//         //When guess is too high
//     } else if (guess > secretNumber) {
//         if (score > 1) {
//             document.querySelector('.message').textContent = 'Too High';
//             score--;
//             document.querySelector('.score').textContent = score;
//         } else {
//             document.querySelector('.message').textContent = '🔥 You Lost The Game';
//             document.querySelector('.score').textContent = 0;
//         }
//     } else if (guess < secretNumber) {
//         if (score > 1) {
//             document.querySelector('.message').textContent = 'Too low';
//             score--;
//             document.querySelector('.score').textContent = score;
//         } else {
//             document.querySelector('.message').textContent = '🔥 You Lost The Game';
//             document.querySelector('.score').textContent = 0;
//         }
//     }
// }

// );


//After Refactoring


//Function for displaying message
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}



document.querySelector('.check').addEventListener('click', function () {
    const guess = Number((document.querySelector('.guess').value));
    console.log(guess, typeof guess)

    //When there is no input
    if (!guess) {
        // document.querySelector('.message').textContent = '⛔️ No Number'; //before refactor
        displayMessage('⛔️ No Number'); //after refactor

        //When player wins
    } else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        displayMessage('Correct Number');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
        //When guess is Wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too High' : 'Too Low');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('🔥 You Lost The Game');
            document.querySelector('.score').textContent = 0;
        }

    }
}
);

///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 15;
    displayMessage('Start Guessing');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})


//Refactoring - Dry Principle - Implementation