function getTime(){
    let today = new Date();
    let hourNow = today.getHours(); 
    let greeting;
    if (hourNow > 18) {
      greeting = 'Good evening';
    } else if (hourNow > 11) {
      greeting = 'Good afternoon';
    } else if (hourNow >= 0) {
      greeting = 'Good morning';
    } else {
      greeting = 'Welcome';
    }
    document.write('<h3>' + greeting.toLowerCase() + '</h3>');
}

function getUserName(){
  let userName = prompt('Please Enter Your Name ');
  document.write(userName + '!')
  return userName;
}

function doYouLikeSW(){
  let likeSW = prompt('Do you like Star Wars?')
  if(likeSW == 'yes'){
      document.write('I like Star Wars as well!')
  } else {
      document.write("i am sorry to hear that.  Go back to Trekkie Land!")
  }
}


// Create a user guessing game
// guess a number between 1 - 100:
// if they guess outside of 1 - 100, make them guess again
// may get to:
// higher or lower
// generate a random correct number

function guessingGame(){
  // What ist he correct Answer?
  let correctAnswer = 37;
  let numberOfGuesses = 8;
// 1 - 100
  for(let i = 0; i < numberOfGuesses; i++){
    console.log(i);
    let userAnswer = prompt('Please Enter a Number 1 - 100');
    while(userAnswer <= 0 || userAnswer > 100){
      userAnswer = prompt('Please Enter a Number 1 - 100');
      console.log('User Guess: ' + userAnswer)
    }
    document.write('<h4>'+userAnswer+'<\h4>')
    if(userAnswer == correctAnswer){
      alert('DING DING DING!  You got it right!');
      break;
    } else if (userAnswer < correctAnswer){
      alert('Sorry, you are too low!');
    } else if (userAnswer > correctAnswer){
      alert('Sorry, your are to high!');
    } else {
      alert('Something went wrong!');
    }

  }
}