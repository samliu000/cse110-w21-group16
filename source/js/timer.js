//timer.js

let countdown = 0; // variable to set/clear intervals
let session_seconds = 1500; // seconds left on the clock
let session_minutes = 25;
let break_minutes = 5;
let short_break_minutes = 5;
let long_break_minutes = 15;
let isBreak = true; 
let session_count = 1;
let actual;
let isStarted = false;
let timer_container = document.getElementById("timer");
let overlay = document.getElementById("popup-overlay");
let reset_popup = document.getElementById("reset-flex");
let currTask = "";

let setIcon = document.getElementById("settings");
let helpIcon = document.getElementById("help");
let startbtn = document.getElementById("start-btn");
let reset = document.getElementById("reset");
let yes = document.getElementById("btn-yes");
let no = document.getElementById("btn-no");
let settings = document.getElementById("setForm");

let donebtn = document.getElementById("done-btn");
let taskInd;
let taskId;

const alarm = document.createElement('audio'); // A bell sound will play when the timer reaches 0
alarm.setAttribute("src", "../alarm/radar_-_ios_7.mp3");


/* EVENT LISTENERS FOR START AND RESET BUTTONS */
if(startbtn){
  document.getElementById("start-btn").addEventListener('click', () => {
    //On timer start
    timer_container.classList.add("main-timer-active");
    setIcon.style.display = "none";
    helpIcon.style.display = "none";

    isStarted = true;  
    clearInterval(countdown);
    countdown = setInterval(timer, 1000);
    document.getElementById('list').style.display = "none";
    taskInd = getRadioIndex('tSelect');
    taskId = getTaskId('tSelect');
    if (taskInd >= 0){
      actual = document.getElementById('table-content').rows[taskInd].cells[3].innerHTML;
      currTask = document.getElementById('table-content').rows[taskInd].cells[1].innerHTML; 
    } else 
		currTask = "";
    // display which task the Pomodoro session is currently on 
    document.getElementById("start-btn").disabled = true;
	
	let currTaskText = document.getElementById("current-task-text");
	currTaskText.innerHTML = "Currently on task: " + currTask;
	let currTaskBlock = document.getElementById("current-task");
	currTaskBlock.style.display = "flex";
  });
}

if(donebtn){
  document.getElementById("done-yes").addEventListener('click', () => {
    document.getElementById("popup-overlay").style.display = "none";
    document.getElementById("done-flex").classList.remove("active");		
    clearInterval(countdown);
    /*alarm.currentTime = 0;
    alarm.play();*/
    if(session_count == 4){
      break_minutes = long_break_minutes;
      session_count = 0;
    }else{
      break_minutes = short_break_minutes;
    }
    session_seconds = break_minutes * 60;
    isBreak = false;
    isStarted = false;
    if (taskInd >= 0){
      actual++;
      console.log(actual);
      document.getElementById('table-content').rows[taskInd].cells[3].innerHTML = actual;
    }
    session_count++;
    countdown = setInterval(timer, 10);
    // hide the current task once pomo session is done	  
    document.getElementById('current-task').style.display = 'none';
    document.getElementById('list').style.display = "block";
    undoCheck('tSelect');
	if(taskInd >= 0)
		document.getElementById('table-content').rows[taskInd].classList.add("completed");
  });
}

if(reset){
  reset.addEventListener('click', () => {
    if(isStarted){
		overlay.style.display = "block";
		reset_popup.classList.add("active");
    }
  });
}
if(yes){
  yes.addEventListener('click', () =>{
    clearInterval(countdown);
    session_seconds = session_minutes * 60;
    countdown = 0;
    isBreak = true;
    clearInterval(countdown);
    countdown = setInterval(timer, 1000);

    overlay.style.display = "none";
    
    reset_popup.classList.remove("active");
  });
}
if(no){
no.addEventListener('click', () =>{
	overlay.style.display = "none";
	reset_popup.classList.remove("active");
});
}

/* TIMER - HANDLES COUNTDOWN */
function timer() {
  document.getElementById("start-btn").disabled = true;
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
      if (taskInd >= 0){
        actual++;
        console.log(actual);
        document.getElementById('table-content').rows[taskInd].cells[3].innerHTML = actual;
        let storedTask = JSON.parse(localStorage.getItem('tasklist'));
        if(storedTask != null){
          for(let i = 0; i < storedTask.length; i++){
            if(storedTask[i].id == taskId){
              storedTask[i].actual = actual;
              localStorage.setItem('tasklist', JSON.stringify(storedTask));
            }
          }
        }
      }
      session_count ++;
      countdown = setInterval(timer, 1000);
      // hide the current task once pomo session is done
      document.getElementById('current-task').style.display = 'none';
      document.getElementById('list').style.display = "block";
      undoCheck('tSelect');
    }else{
      session_seconds = session_minutes * 60;
      isBreak = true;
      document.getElementById("start-btn").disabled = false;
    }
  }
}

/* Settings for Timer*/
if (settings){
  settings.addEventListener('submit', () => {
    event.preventDefault();
    document.getElementById("popup-overlay").style.display = "none";
    document.getElementById("settings-flex").classList.remove("active");
    let focus = document.getElementById("focus").value;
    let short_break = document.getElementById("short-break").value;
    let long_break = document.getElementById("long-break").value;
    
    if(focus != ""){
		session_seconds = Number(focus) * 60;
		session_minutes = Number(focus);
    }
    if(short_break != "")
      short_break_minutes = Number(short_break);
    if(long_break != "")
      long_break_minutes = Number(long_break);
  });
}


/* UPDATE HTML CONTENT */
function countdownDisplay() {
  let session_minutes = Math.floor(session_seconds / 60);
  let title = (currTask == 0) ? `${session_minutes}m` : `${session_minutes}m: ${currTask}`;
  if(isStarted && document.title != title){
	  document.title = title;
  } else if(!isStarted && document.title != "Pomodoro Timer!")
	  document.title = "Pomodoro Timer!";
  let remaining_seconds = session_seconds % 60;
  document.getElementById("timerDisplay").textContent = `${session_minutes}:${remaining_seconds < 10 ? '0' : ''}${remaining_seconds}`;
}

function updateHTML() {
  countdownDisplay();
  /*
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
	let currTaskBlock = document.getElementById("current-task");
	currTaskBlock.style.display = "none";
  }else if(isBreak == false && session_count == 1){
    //document.getElementById("status").innerHTML= "Long Break!";
	timer_container.classList.remove("main-timer-active");
	overlay.style.display = "none";
	//on timer end
	reset_popup.classList.remove("active");
	setIcon.style.display = "block";
	helpIcon.style.display = "block";
	let currTaskBlock = document.getElementById("current-task");
	currTaskBlock.style.display = "none";
  }
}

//Radio Index
function getRadioIndex(name)
{
    let elements = document.getElementsByName(name);
    console.log(elements);
    for (let i = 0, l = elements.length; i < l; i++)
    {
        if (elements[i].checked)
        {
            return i;
        }
    }
}

function getTaskId(name)
{
    let elements = document.getElementsByName(name);

    console.log(elements);
    for (let i = 0, l = elements.length; i < l; i++){
        if (elements[i].checked) 
        {
            return elements[i].id;
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

window.setInterval(updateHTML, 1000);

document.onclick = updateHTML;
module.exports = {undoCheck};