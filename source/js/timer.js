//timer.js

let countdown = 0; // variable to set/clear intervals
let session_seconds = 1500; // seconds left on the clock
let session_minutes = 25; // default pomodoro session minute
let break_minutes = 5;// break minutes
let short_break_minutes = 5; //short break minutes
let long_break_minutes = 15;//long break minutes
let isBreak = true; //determines if timer is on break
let session_count = 1;//the number of pomodoro session has done
let actual;//the actual column number
let isStarted = false;//determines if the time has been started
let timer_container = document.getElementById("timer");//the timer
let overlay = document.getElementById("popup-overlay");//pop-up
let reset_popup = document.getElementById("reset-flex");//pop-up that confirms reseting timer
let currTask = "";

let setIcon = document.getElementById("settings");//setting icon
let helpIcon = document.getElementById("help");//help icon
let startbtn = document.getElementById("start-btn");//start button
let reset = document.getElementById("reset");//reset button
let yes = document.getElementById("btn-yes");//yes button
let no = document.getElementById("btn-no");//no button
let settings = document.getElementById("setForm");//the setting form

let donebtn = document.getElementById("done-btn");//done btn
let taskInd;//task index
let taskId;//task id

const alarm = document.getElementById('alarm'); // A bell sound will play when the timer reaches 0


/**
 * Click start button to start the timer
 * Hide the task list during pomodoro session
 * Display current task the user is working on
 * Disable the start button after user started the timer
 */
if(startbtn){
  //Excute the function when start btn was clicked
  document.getElementById("start-btn").addEventListener('click', () => {
  timer_container.classList.add("main-timer-active");
  //Hide the setting and help button
  setIcon.style.display = "none";
  helpIcon.style.display = "none";

  isStarted = true;  
  //Start the timer
  clearInterval(countdown);
  countdown = setInterval(timer, 1000);
  //Hide task list
  document.getElementById('list').style.display = "none";
  //Get the index of the choosen task
  taskInd = getRadioIndex('tSelect');
  //Get the id of the choosen task
  taskId = getTaskId('tSelect');

  if (taskInd >= 0){
    //Store the current task actual column
    actual = document.getElementById('table-content').rows[taskInd].cells[3].innerHTML;
    //Store the current task name
    currTask = document.getElementById('table-content').rows[taskInd].cells[1].innerHTML;
  }else{
    currTask = "";
  }
    //Disable the start button after timer starts
    document.getElementById("start-btn").disabled = true;
    //Display which task the Pomodoro session is currently on 
    if(currTask != 0){
      let currTaskText = document.getElementById("current-task-text");
      currTaskText.innerHTML = "Currently on task: " + currTask;
      let currTaskBlock = document.getElementById("current-task");
      currTaskBlock.style.display = "flex";
    }
  });
}

/**
 * Mark the current task to be finished by clicking the done btn
 * Change the state of the finished task to be done in localStorage 
 */
if(donebtn){
  document.getElementById("done-yes").addEventListener('click', () => {
    document.getElementById("popup-overlay").style.display = "none";
    document.getElementById("done-flex").classList.remove("active");		
    clearInterval(countdown);
    alarm.play();
    //When user has completed four pomodoro session, set the timer to long break
    if(session_count == 4){
      break_minutes = long_break_minutes;
      session_count = 0;
    }
    //Else set the timer to short break
    else{
      break_minutes = short_break_minutes;
    }
    session_seconds = break_minutes * 60;
    isBreak = false;
    isStarted = false;
    //If a task was chosen, increment the actual count and store the 
    //updated actual count to localStorage
    actual++;
    document.getElementById('table-content').rows[taskInd].cells[3].innerHTML = actual;
    session_count++;
    //unselect the task
    undoCheck('tSelect');
    //Start the timer
    countdown = setInterval(timer, 1000);
    //Hide the current task once pomo session is done	  
    document.getElementById('current-task').style.display = 'none';
    document.getElementById('list').style.display = "block";
    document.getElementById('table-content').rows[taskInd].classList.add("completed");
    //Store the finished task to localStorage
    let storedTask = JSON.parse(localStorage.getItem('tasklist'));
    for(let i = 0; i < storedTask.length; i++){
      if(storedTask[i].id == taskId){
          storedTask[i].actual = actual;
          storedTask[i].finish = 'done';
          localStorage.setItem('tasklist', JSON.stringify(storedTask));
      }
    }
  });
}
/**
 * Click reset button to reset the timer
 * Pop-up confirms with user to reset the timer
 */
if(reset){
  reset.addEventListener('click', () => {
    //Can only click reset button after start button was clicked
    if(isStarted){
    overlay.style.display = "block";
		reset_popup.classList.add("active");
    }
  });
}
/**
 * User agrees to reset the timer by clicking yes button
 * Restart the timer automatically
 */
if(yes){
  yes.addEventListener('click', () =>{
    //Reset and restart the timer
    clearInterval(countdown);
    session_seconds = session_minutes * 60;
    countdown = 0;
    isBreak = true;
    countdown = setInterval(timer, 1000);

    overlay.style.display = "none";
    //Close the pop-up
    reset_popup.classList.remove("active");
  });
}
/**
 * User declines to reset the timer by clicking no button
 */
if(no){
  no.addEventListener('click', () =>{
    overlay.style.display = "none";
    //Close pop-up
    reset_popup.classList.remove("active");
  });
}

/**
 * Timer function that handles countdown
 * Timer goes to short break after each pomodoro session
 * Timer goes to long break after four pomodoro session
 * Timer goes back to pomodoro session after break
 * Increment the actual column after each pomodoro session
 * Store the actual count to localStorage
 */
function timer() {
  //Count down by decrementing seconds
  session_seconds --;
  //When timer has ended
  if (session_seconds < 0) {
    clearInterval(countdown);
    alarm.currentTime = 0;
    //Play the alarm
    alarm.play();
    //Check if isBreak is true, when it is True we should set timer to break
    if(isBreak == true){
      //When user has completed four pomodoro session, set the timer to long break
      if(session_count == 4){
        break_minutes = long_break_minutes;
        //Reset the session count
        session_count = 0;
      }
      //Else set the timer to short break
      else{
        break_minutes = short_break_minutes;
      }
      session_seconds = break_minutes * 60;
      isBreak = false;
      isStarted = false;
      //If a task was chosen, increment the actual count and store the 
      // updated actual count to localStorage
      if (taskInd >= 0){
        //Increment actual count
        actual++;
        document.getElementById('table-content').rows[taskInd].cells[3].innerHTML = actual;

        //Store updated actual to localStorage
        let storedTask = JSON.parse(localStorage.getItem('tasklist'));
        for(let i = 0; i < storedTask.length; i++){
          if(storedTask[i].id == taskId){
            storedTask[i].actual = actual;
            localStorage.setItem('tasklist', JSON.stringify(storedTask));
          }
        }
      }
      //Increment the session count
      session_count ++;
      //Start the timer
      countdown = setInterval(timer, 1000);
      //Hide the current task once pomodoro session is done
      document.getElementById('current-task').style.display = 'none';
      document.getElementById('list').style.display = "block";
      undoCheck('tSelect');
    }
    //Else isBreak is false, set the timer to pomodoro session
    else{
      session_seconds = session_minutes * 60;
      isBreak = true;
      document.getElementById("start-btn").disabled = false;
    }
  }
}

/**
 * Settings for timer
 */
if (settings){
  settings.addEventListener('submit', () => {
    event.preventDefault();
    document.getElementById("popup-overlay").style.display = "none";
    document.getElementById("settings-flex").classList.remove("active");
    //User can customize focus time, short break, and long break
    let focus = document.getElementById("focus").value;
    let short_break = document.getElementById("short-break").value;
    let long_break = document.getElementById("long-break").value;
    //Set the necessary varibles to user input
    if(focus != ""){
		session_seconds = (Number(focus) * 60 > 0) ? (Number(focus) * 60) : 3;
		session_minutes = (Number(focus) > 0) ? Number(focus) : .05;
    }
    if(short_break != "")
      short_break_minutes = (Number(short_break) > 0) ? Number(short_break) : .05;
    if(long_break != "")
      long_break_minutes = (Number(long_break) > 0) ? Number(long_break) : .05;
  });
}


/**
 * Update HTML of the timer
 */
function countdownDisplay() {
  //Calculate the session minutes
  let session_minutes = Math.floor(session_seconds / 60);
  //Update the brower title
  let title = (currTask == 0) ? `${session_minutes}m` : `${session_minutes}m: ${currTask}`;
  if(isStarted && document.title != title){
		document.title = title;
  }else if(!isStarted && document.title != "Pomodoro Timer!"){
    document.title = "Pomodoro Timer!";
  }
  //Find the remaining seconds
  let remaining_seconds = session_seconds % 60;
  //Display the timer as HTML content
  document.getElementById("timerDisplay").textContent = `${session_minutes}:${remaining_seconds < 10 ? '0' : ''}${remaining_seconds}`;
}

/**
 * updateHTML when the 
 */
function updateHTML() {
  countdownDisplay();
  //At the end of the short break and long break, deactivate reset popup, bring back
  //setting icon and helping icon, and hide the curret task block
  if(isBreak == false){
    timer_container.classList.remove("main-timer-active");
    // deactivate reset popup
    overlay.style.display = "none";
    reset_popup.classList.remove("active");
    //bring back setting icon and helping icon
    setIcon.style.display = "block";
    helpIcon.style.display = "block";
    //hide the curret task block
    let currTaskBlock = document.getElementById("current-task");
    currTaskBlock.style.display = "none";
  }
}

/**
 * Get the index of the current task
 * @param {*} name 
 */
function getRadioIndex(name)
{
  let elements = document.getElementsByName(name);
  let storedTask = JSON.parse(localStorage.getItem('tasklist'));
  //Find the element by checking which element was selected
  for (let i = 0; i < elements.length; i++)
  {   
      if (elements[i].checked && storedTask[i].finish !== "done"){
        //Return the index of current task
        return i;
      }
  }
}

/**
 * Get the id of the current task
 * @param {*} name 
 */
function getTaskId(name)
{
    let elements = document.getElementsByName(name);
    let storedTask = JSON.parse(localStorage.getItem('tasklist'));
    //Find the element by checking which element was selected
    for (let i = 0, l = elements.length; i < l; i++){
        if (elements[i].checked && storedTask[i].finish != "done") 
        {
          //Return the id of the current task
          return elements[i].id;
        }
    }
}

/**
 * unselect the current task after the timer is done
 * @param {*} name 
 */
function undoCheck(name)
{
    let elements = document.getElementsByName(name);
    for (let i = 0, l = elements.length; i < l; i++)
    {
        if (elements[i].checked)
        {
          //Undo the selection
          elements[i].checked = false;
        }
    }
}

window.setInterval(updateHTML, 1000);

document.onclick = updateHTML;
module.exports = {undoCheck};