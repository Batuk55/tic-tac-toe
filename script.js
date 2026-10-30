// javascript;
// let boxes = document.querySelectorAll('.box');

// let rstBtn = document.querySelectorAll('.reset');

// let newGameBtn = document.querySelectorAll('.new-btn');

// let msgContainer = document.querySelector('.msg-container');

// let msg = document.querySelector('#msg');

// let count = 0;

// let turnO = true; // playerX, playerO

// let countO = 0;

// let countX = 0;

// let winningPatterns = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6],
// ];

// const resetGame = () => {
//   turnO = true;
//   count = 0;
//   enableAndClearBoxes();
//   msgContainer.classList.add('hide');
// };

// const enableAndClearBoxes = () => {
//   for (let box of boxes) {
//     box.innerText = '';
//     box.style.backgroundColor = 'antiquewhite';
//     box.disabled = false;
//   }
// };

// const showWinner = (winner) => {
//   msg.innerText = `Congratulations! Winner is ${winner}. [O won ${countO} times & X won ${countX} times]`;
//   msgContainer.classList.remove('hide');
//   disableBoxes();
// };

// const disableBoxes = () => {
//   for (let box of boxes) {
//     box.disabled = true;
//   }
// };

// const checkWinner = () => {
//   for (let pattern of winningPatterns) {
//     let pos0Val = boxes[pattern[0]].innerText;
//     let pos1Val = boxes[pattern[1]].innerText;
//     let pos2Val = boxes[pattern[2]].innerText;

//     if (pos0Val !== '' && pos0Val === pos1Val && pos1Val === pos2Val) {
//       if (pos0Val === 'O') countO++;
//       else countX++;

//       return true;
//     }
//   }

//   return false;
// };

// // Reset Game buttons (both locations)
// rstBtn.forEach((btn) => {
//   btn.addEventListener('click', resetGame);
// });

// // New Game buttons (both locations)
// newGameBtn.forEach((btn) => {
//   btn.addEventListener('click', () => {
//     countX = 0;
//     countO = 0;
//     resetGame();
//   });
// });

// // Game logic
// boxes.forEach((box) => {
//   box.addEventListener('click', () => {
//     console.log('box was clicked');

//     if (turnO) {
//       box.innerText = 'O';
//       box.style.backgroundColor = 'skyblue';
//       turnO = false;
//     } else {
//       box.innerText = 'X';
//       box.style.backgroundColor = 'pink';
//       turnO = true;
//     }

//     box.disabled = true;

//     count++;

//     if (checkWinner()) {
//       showWinner(turnO ? 'X' : 'O');
//     } else if (count === 9) {
//       msg.innerText = "It's a Draw!";
//       msgContainer.classList.remove('hide');
//       disableBoxes();
//     }
//   });
// });
let boxes = document.querySelectorAll('.box');

let rstBtn = document.querySelectorAll('.reset');

let newGameBtn = document.querySelectorAll('.new-btn');

let msgContainer = document.querySelector('.msg-container');

let msg = document.querySelector('#msg');

let count = 0;

let turnO = true;

let countO = 0;

let countX = 0;

let winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Reset game

const resetGame = () => {
  turnO = true;
  count = 0;

  enableAndClearBoxes();

  msgContainer.classList.add('hide');
};

// Clear and enable boxes

const enableAndClearBoxes = () => {
  for (let box of boxes) {
    box.innerText = '';
    box.style.backgroundColor = '';
    box.disabled = false;
  }
};

// Show winner

const showWinner = (winner) => {
  msg.innerText = `Congratulations! Winner is ${winner}. [O won ${countO} times & X won ${countX} times]`;

  msgContainer.classList.remove('hide');

  disableBoxes();
};

// Disable boxes

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

// Check winner

const checkWinner = () => {
  for (let pattern of winningPatterns) {
    let pos0Val = boxes[pattern[0]].innerText;
    let pos1Val = boxes[pattern[1]].innerText;
    let pos2Val = boxes[pattern[2]].innerText;

    if (pos0Val !== '' && pos0Val === pos1Val && pos1Val === pos2Val) {
      if (pos0Val === 'O') {
        countO++;
      } else {
        countX++;
      }

      return true;
    }
  }

  return false;
};

// Reset Game buttons (both locations)

rstBtn.forEach((btn) => {
  btn.addEventListener('click', resetGame);
});

// New Game buttons (both locations)

newGameBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    countX = 0;
    countO = 0;

    resetGame();
  });
});

// Game logic

boxes.forEach((box) => {
  box.addEventListener('click', () => {
    if (box.disabled) return;

    if (turnO) {
      box.innerText = 'O';
      box.style.backgroundColor = 'skyblue';
      box.style.color = 'brown';

      turnO = false;
    } else {
      box.innerText = 'X';
      box.style.backgroundColor = 'pink';
      box.style.color = 'brown';

      turnO = true;
    }

    box.disabled = true;

    count++;

    if (checkWinner()) {
      showWinner(turnO ? 'X' : 'O');
    } else if (count === 9) {
      msg.innerText = "It's a Draw!";

      msgContainer.classList.remove('hide');

      disableBoxes();
    }
  });
});
