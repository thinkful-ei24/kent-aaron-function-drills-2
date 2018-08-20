function rockPaperScissors(hand) {
  if (hand !== 1 && hand !== 2 && hand !== 3) {
    throw new Error('Invalid Argument');
  }

  const randomNo = Math.floor(Math.random() * 3) + 1;

  if (hand === randomNo) {
    return 'The game is a tie'
  } 

  if (hand === 1) {
    if (randomNo === 2) {
      return 'You lose! Paper beats rock.'
    } else {
      return 'You win! Rock beats scissors.'
    }
  }

  if (hand === 2) {
    if (randomNo === 3) {
      return 'You lose! Scissors beats paper.'
    } else {
      return 'You win! Paper beats rock.'
    }
  }

  if (hand === 3) {
    if (randomNo === 1) {
      return 'You lose! Rock beats scissors.'
    } else {
      return 'You win! Scissors beats paper.'
    }
  }
}

try {
  console.log(rockPaperScissors(1));
  console.log(rockPaperScissors(2));
  console.log(rockPaperScissors(3));
  console.log(rockPaperScissors(4));
} catch(e) {
  console.error(e.message);
}