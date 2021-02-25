//timer.js

let countdown = 0; // variable to set/clear intervals
let session_seconds = 1500; // seconds left on the clock
let session_minutes = 25;
let break_minutes = 5;
let short_break_minutes = 5;
let long_break_minutes = 15;
let isBreak = true; 
let session_count = 1;
let index;
let actual;
let isStarted = false;
let timer_container = document.getElementById("timer");
let overlay = document.getElementById("popup-overlay");
let reset_popup = document.getElementById("reset-flex");
let currTask;

let setIcon = document.getElementById("settings");
let helpIcon = document.getElementById("help");

const alarm = document.createElement('audio'); // A bell sound will play when the timer reaches 0
alarm.setAttribute("src", "../alarm/radar_-_ios_7.mp3");


/* EVENT LISTENERS FOR START AND RESET BUTTONS */
document.getElementById("start-btn").addEventListener('click', () => {
	//On timer start
  timer_container.classList.add("main-timer-active");
  setIcon.style.display = "none";
  helpIcon.style.display = "none";

  isStarted = true;  
  clearInterval(countdown);
  countdown = setInterval(timer, 1);
  document.getElementById('list').style.display = "none";
  index = getRadioIndex('tSelect');
  actual = document.getElementById('table-content').childNodes[index].childNodes[3].innerHTML;
  // display which task the Pomodoro session is currently on 
  currTask = document.getElementById('table-content').childNodes[index].childNodes[1].innerHTML; 
  let currTaskText = document.querySelector('main').appendChild(document.createElement('h1')); 
  currTask.id = 'current_task';
  currTaskText.style.color = 'white';
  currTaskText.innerHTML = "Currently on task: " + currTask;
  // disable the start button to avoid multiple text showing up
  document.getElementById("start-btn").disabled = true;
});

document.getElementById("reset").addEventListener('click', () => {
  if(isStarted){
	overlay.style.display = "block";
	reset_popup.classList.add("active");
  }
});

document.getElementById("btn-yes").addEventListener('click', () =>{
	clearInterval(countdown);
	session_seconds = session_minutes * 60;
	countdown = 0;
	isBreak = true;
	clearInterval(countdown);
	countdown = setInterval(timer, 10);
	overlay.style.display = "none";
	
	reset_popup.classList.remove("active");
});

document.getElementById("btn-no").addEventListener('click', () =>{
	overlay.style.display = "none";
	reset_popup.classList.remove("active");
});

/* TIMER - HANDLES COUNTDOWN */
function timer() {
  document.getElementById("start-btn").disabled = false;
  session_seconds --;
  if (session_seconds < 0) {
    clearInterval(countdown);
    alarm.currentTime = 0;
    alarm.play();
    if(isBreak == true){
      if(session_count == 4){
        break_minutes = long_break_minutes;
        session_count = 0;
      }else{
        break_minutes = short_break_minutes;
      }
      session_seconds = break_minutes * 60;
      isBreak = false;
      isStarted = false;
      actual++;
      session_count ++;
      countdown = setInterval(timer, 10);
      console.log(document.querySelector('main').childNodes);
      // remove the current task text before checklist appears
      document.querySelector('main').removeChild(document.querySelector('main').childNodes[document.querySelector('main').childNodes.length - 1]);
      document.getElementById('list').style.display = "block";
      undoCheck('tSelect');
    }else{
      session_seconds = session_minutes * 60;
      isBreak = true;
    }
  }
}

/* Settings for Timer*/
document.getElementById("setForm").addEventListener('submit', () => {
	event.preventDefault();
	document.getElementById("popup-overlay").style.display = "none";
	document.getElementById("settings-flex").classList.remove("active");
	let focus = document.getElementById("focus").value;
	let short_break = document.getElementById("short-break").value;
	let long_break = document.getElementById("long-break").value;
	
	if(focus != ""){
		session_seconds = Number(focus) * 60;
	}
	if(short_break != "")
		short_break_minutes = Number(short_break);
	if(long_break != "")
		long_break_minutes = Number(long_break);
});


/* UPDATE HTML CONTENT */
function countdownDisplay() {
  let session_minutes = Math.floor(session_seconds / 60);
  let remaining_seconds = session_seconds % 60;
  document.getElementById("timerDisplay").textContent = `${session_minutes}:${remaining_seconds < 10 ? '0' : ''}${remaining_seconds}`;
}

function updateHTML() {
  countdownDisplay();
  if(index >= 0){
    let x = document.getElementById("table-content").childNodes[index].cells;
    x[3].innerHTML = actual;
  }
  
  //Block is causing TypeError
  /*if(isBreak == true){
    document.getElementById("status").innerHTML = "Promodoro Session";
  }*/

  if(isBreak == false && session_count != 1){
    //document.getElementById("status").innerHTML = "Short Break";
	timer_container.classList.remove("main-timer-active");
	overlay.style.display = "none";
	//on timer end
	reset_popup.classList.remove("active");
	setIcon.style.display = "block";
	helpIcon.style.display = "block";
  }else if(isBreak == false && session_count == 1){
    //document.getElementById("status").innerHTML= "Long Break!";
	timer_container.classList.remove("main-timer-active");
	overlay.style.display = "none";
	//on timer end
	reset_popup.classList.remove("active");
	setIcon.style.display = "block";
	helpIcon.style.display = "block";
  }
}

//Radio Index
function getRadioIndex(name)
{
    let elements = document.getElementsByName(name);
    for (let i = 0, l = elements.length; i < l; i++)
    {
        if (elements[i].checked)
        {
            return i;
        }
    }
}
//
function undoCheck(name)
{
    let elements = document.getElementsByName(name);
    for (let i = 0, l = elements.length; i < l; i++)
    {
        if (elements[i].checked)
        {
            elements[i].checked = false;
        }
    }
}

window.setInterval(updateHTML, 100);

document.onclick = updateHTML;