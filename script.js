function generateRandomInteger(min, max) {
  return Math.floor(min + Math.random()*(max + 1 - min))
}//Creates a function to generate a random number 1-4 (button options)

//Global Variables
var pattern = [generateRandomInteger(1, 4), generateRandomInteger(1, 4), generateRandomInteger(1, 4)
              , generateRandomInteger(1, 4), generateRandomInteger(1, 4), generateRandomInteger(1, 4), 
               generateRandomInteger(1, 4), generateRandomInteger(1, 4)]
//Creates the pattern using a random method 

var progress = 0;//Which turn we are on
var gamePlaying = false;//Initializes gamePlaying var to false
var tonePlaying = false;//Var tonePlaying
var volume = 0.5;  //must be between 0.0 and 1.0, sets the volume of the sounds
var guessCounter = 0;//Keeps track of the guesses
var strikes;

// global constants
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var cluePauseTime = 333; //how long to pause in between clues
var nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

function startGame(){
    //initialize game variables
    progress = 0;
    gamePlaying = true;//Updates gamePlaying var to true
    strikes = 0;
  
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");//Adds start button to class hidden
    document.getElementById("stopBtn").classList.remove("hidden");//Removes stop button from class hidden
  
  playClueSequence();
}

function stopGame(){
  gamePlaying = false;//Updates gamePlaying var to false
  
  document.getElementById("stopBtn").classList.add("hidden");//Adds stop button to class hidden
  document.getElementById("startBtn").classList.remove("hidden");//Removes start button from class hidden
}

// Sound Synthesis Functions
const freqMap = {
  1: 341.6,
  2: 249.6,
  3: 152,
  4: 386.2
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}//Using a button number and length of time (ms) to play a tone for a specified amount of time

function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}//Plays the tone

function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}//Stops the tone

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  
  clueHoldTime -= 70;
  //Decreases the hold time, which speeds up the rate which the sounds come through
    
  for(let i = 0;i <= progress; i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;       
     
    
  }
}// repeat some code once for each clue we want to play

function loseGame(){
    stopGame();
    alert("Game Over. You lost.");
  
  } 
 

function winGame(){
  alert("Game Over. You won!.");
    
}


function guess(btn){
  console.log("user guessed: " + btn);
  
  if(!gamePlaying){
    return;
    
  }
   if (btn != pattern[guessCounter]) {
    strikes++;
     strikeCount();
     console.log(strikes);
     if(strikes == 3){
       loseGame();
     }
     playClueSequence();
  } else {
    //if it does match
    //if the turn is not over
    if (progress != guessCounter) {
      guessCounter++;
    } else {
      //if turn is over
      //if it is not the last turn
      if (pattern.length - 1 != progress) {
        progress++;
        playClueSequence();
      } else {
        //if it is the last turn
        winGame();
      }
    }
  }
  
}

//Additional Features
function strikeCount(){
  if (strikes == 1){
    document.getElementById("heart3").classList.add("hidden");
  }
  if (strikes == 2){
    document.getElementById("heart2").classList.add("hidden");
  }
  if (strikes == 3){
    document.getElementById("heart1").classList.add("hidden");
  }
}

