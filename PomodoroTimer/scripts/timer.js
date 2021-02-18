
let countdown = 0; // variable to set/clear intervals
let session_seconds = 1500; // seconds left on the clock
let session_minutes = 25;
let break_minutes = 5;
let isBreak = true;
let session_count = 0;
let actual = document.getElementById('counter');

const status = document.querySelector("#status");
const timerDisplay = document.querySelector(".timerDisplay");
const startBtn = document.querySelector("#start-btn");
const resetBtn = document.querySelector("#reset");

const alarm = document.createElement('audio'); // A bell sound will play when the timer reaches 0
alarm.setAttribute("src", "../alarm/radar_-_ios_7.mp3");


/* EVENT LISTENERS FOR START AND RESET BUTTONS */
startBtn.addEventListener('click', () => {
  clearInterval(countdown);
  session_count ++;
  countdown = setInterval(timer, 10);
});

resetBtn.addEventListener('click', () => {
  if(confirm("Are you sure you want to reset?")) {
  clearInterval(countdown);
  session_seconds = session_minutes * 60;
  countdown = 0;
  isBreak = true;
  clearInterval(countdown);
  if(session_count == 0){
    session_count = 1;
  }
  countdown = setInterval(timer, 10);
  }
});

/* TIMER - HANDLES COUNTDOWN */
function timer() {
  session_seconds --;
  if (session_seconds < 0) {
    clearInterval(countdown);
    alarm.currentTime = 0;
    alarm.play();
    if(isBreak == true){
      if(session_count == 4){
        break_minutes = 15;
        session_count = 0;
      }else{
        break_minutes = 5;
      }
      session_seconds = break_minutes * 60;
      isBreak = false;
      actual.value++;
      updateActual();
      countdown = setInterval(timer, 10);
    }else{
      session_seconds = session_minutes * 60;
      isBreak = true;
    }
  }
}
/* UPDATE HTML CONTENT */
function countdownDisplay() {
  let session_minutes = Math.floor(session_seconds / 60);
  let remaindersession_seconds = session_seconds % 60;
  timerDisplay.textContent = `${session_minutes}:${remaindersession_seconds < 10 ? '0' : ''}${remaindersession_seconds}`;
}

function updateHTML() {
  countdownDisplay();
  if(isBreak == true){
    status.textContent = "Promodoro Session";
  }
  if(isBreak == false && session_count != 0){
    status.textContent = "Short Break";
  }else if(isBreak == false && session_count == 0){
    status.textContent = "Long Break!";
  }
}

function updateActual(){
  let aId = document.getElementById("table-content").firstChild.childNodes[3].id;
  let aVal = aId.value++;
  aId.innerHTML = aVal;
}

window.setInterval(updateHTML, 100);

document.onclick = updateHTML;