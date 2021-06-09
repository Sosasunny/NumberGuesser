let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
//step 3
function generateTarget(num){
  return Math.floor(Math.random() * 10);
}
//console.log(generateTarget(4));
//step 4
function compareGuesses(humanGuess, computerGuess, targetNumber){
   if(Math.abs(humanGuess - targetNumber) < Math.abs(computerGuess - targetNumber)){
    return true;
  }else if(Math.abs(computerGuess - targetNumber) < Math.abs(humanGuess -targetNumber)){
    return false;
  }else{
    return true;
  }
}
//console.log(compareGuess(5));

function updateScore(winner){
  if(winner === 'human'){
    humanScore += 1;
  }else if(winner === 'computer'){
    computerScore += 1;
  }else{
    return humanScore += 1;
  }
  /*switch(winner){
    case 'human':
      humanScore += 1;
      break;
    case 'computer':
      computerScore += 1;
      break;
    default:
      return humanScore += 1;
  }*/
  }
  
  function advanceRound(){
   currentRoundNumber += 1;
  }
  //updateScore('human');
  //console.log(humanScore);
  //updateScore('computer');
  //console.log(computerScore);
  let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
//step 3
function generateTarget(num){
  return Math.floor(Math.random() * 10);
}
//console.log(generateTarget(4));
//step 4
function compareGuesses(humanGuess, computerGuess, targetNumber){
   if(Math.abs(humanGuess - targetNumber) < Math.abs(computerGuess - targetNumber)){
    return true;
  }else if(Math.abs(computerGuess - targetNumber) < Math.abs(humanGuess -targetNumber)){
    return false;
  }else{
    return true;
  }
}
//console.log(compareGuess(5));

function updateScore(winner){
  if(winner === 'human'){
    humanScore += 1;
  }else if(winner === 'computer'){
    computerScore += 1;
  }else{
    return humanScore += 1;
  }
  /*switch(winner){
    case 'human':
      humanScore += 1;
      break;
    case 'computer':
      computerScore += 1;
      break;
    default:
      return humanScore += 1;
  }*/
  }
  
  function advanceRound(){
   currentRoundNumber += 1;
  }
  //updateScore('human');
  //console.log(humanScore);
  //updateScore('computer');
  //console.log(computerScore);
  