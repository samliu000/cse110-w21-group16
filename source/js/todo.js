//main.js

let addT = document.getElementById('btn-add');//add task button
let est = document.getElementById('est');//estimation textfield
let tName =document.getElementById('tName');//task name textfield

let rad;//radio button
let btn;//delete button
let done;//done button

let tasklist = [];

/**
 * If add task button is clicked, call checkField function to validate the input
*/
if(addT){
    addT.addEventListener("click", checkFields);
}

/**
 * User can't input 'e', '+', '-' to the estimation textfield
 */
if(est){
    est.addEventListener('keydown', function(event) {
        if (event.key == 'e' || event.key == '+' || event.key == '-') {
            event.preventDefault();
        }
    });
}
/**
 * Users can press enter or cancel on keyboard to add task or cancel adding task
 */
if(tName){
    tName.addEventListener('keyup', function(event) {
    //If enter was pressed, click addT button
    if (event.key == 'Enter') {
        addT.click();
    }
    //If esc was pressed, click the cancel button
    else if (event.key == 'Escape') {
        document.getElementById('btn-cancel').click();
    }
    event.preventDefault();
    });
}
/**
 * Users can press enter or cancel on keyboard to add task or cancel adding task
 */
if(est){
    est.addEventListener('keyup', function(event) {
    //If enter was pressed, click addT button
    if (event.key == 'Enter') {
        addT.click();
    }
    //If esc was pressed, click the cancel button
    else if (event.key == 'Escape') {
        document.getElementById('btn-cancel').click();
    }
    event.preventDefault();
    });
}
/**
 * When the page was refreshed, get the tasklist from the localStorage
 * and call showTaskList to display all stored tasks
 */
window.addEventListener('DOMContentLoaded', () => {
    //Get the tasklist from Local Storage
    let storedTask = localStorage.getItem('tasklist');
    //If the storedTask is not null
    if(storedTask != null){
        tasklist = JSON.parse(storedTask);
        //Display all the stored tasks to the screen
        showTaskList();
    }
    //When add task button is clicked, call checkField function to validate the input
    addT.addEventListener("click", checkFields);
});

/**
 * Function that checks if user have valid input. Return true
 * if all input are valid and call addTask function, false otherwise.
 */
function checkFields(){
    if (document.getElementById('tName').value != "" &&
        document.getElementById('est').value > 0 &&
        document.getElementById('est').value < 51) {
            //Call addTask function if all input are valid
            addTask();
            return true;
        }
    return false;
}

/**
 * Function that iterate through the tasklist retrieved from localStorge 
 * and display each task to the screen
 */
function showTaskList(){
 
    for(let i = 0; i < tasklist.length; i++){
        //radio button
       rad = document.createElement('input');
       rad.type = "radio";
       rad.id = tasklist[i].id;
       rad.name = "tSelect";
       
   
       //delete button
       btn = document.createElement('i');
       btn.id = tasklist[i].id;
       btn.className = "fa fa-trash";
       btn.onclick = function() {editRow(this);};

       //done button
        done = document.createElement('i');
        done.id = tasklist[i].finish;
        done.className = "fa fa-check-square";
        done.onclick = function() {rowDone(this);};
       
        //cells created
        //cells created
        let row = document.getElementById('table-content').insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        let cell6 = row.insertCell(5);
    
        //cells filled
        cell2.innerHTML = tasklist[i].taskName;
        cell3.innerHTML = tasklist[i].estimation;
        cell4.innerHTML = tasklist[i].actual;
        cell5.appendChild(btn);
        cell1.appendChild(rad);

        //Only append the radio button and done button when the task are alive
        if(tasklist[i].finish != "done"){
            cell6.appendChild(done);
        }
        //Else if the task were marked as finished, change the style
        else{
            row.classList.add("completed");
        }

    }
    document.getElementById("add-form").style.display = "none";
}
/**
 * Function that create a new task and add the new task to the localStorage
 */
function addTask(){

    //radio button
    rad = document.createElement('input');
    rad.type = "radio";
    rad.id = Date.now();
    rad.name = "tSelect";
    

    //delete button
	btn = document.createElement('i');
    btn.id = Date.now();
    btn.className = "fa fa-trash";
	btn.onclick = function() {editRow(this);};
	
	//done button
	done = document.createElement('i');
	done.id = btn.id;
	done.className = "fa fa-check-square";
	done.onclick = function() {rowDone(this);};

    //cells created
    let row = document.getElementById('table-content').insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
	let cell6 = row.insertCell(5);
    
    //cells filled
    cell1.appendChild(rad);
    cell2.innerText = document.getElementById("tName").value;
    cell3.innerHTML = document.getElementById("est").value;
    cell4.innerHTML = 0;
    cell5.appendChild(btn);
	cell6.appendChild(done);

    //Add all properties of the task to the localStorage
    tasklist.push({
        taskName: document.getElementById("tName").value,
        estimation: document.getElementById('est').value,
        actual: 0,
        id: btn.id,
        finish: done.id
    });
    //Set the changed tasklist to localStorage
    localStorage.setItem("tasklist", JSON.stringify(tasklist));

    document.getElementById("add-form").style.display = "none";
}
/**
 * Function that deletes a task and remove the task from the localStorage
 * @param {*} elem 
 */
function editRow(elem) {
    //Remove the task
    let row = elem.parentElement.parentElement;
    row.remove();
    //Remove the task from the localStorage
    for(let i = 0; i < tasklist.length; i++){
        if(tasklist[i].id === elem.id){
             tasklist.splice(i, 1);
        }
    }
    //Set the changed tasklist to localStorage
    localStorage.setItem("tasklist", JSON.stringify(tasklist));
    
}
/**
 * Function that mark the task as done and stores the 'done' property
 * to the tasks that was mark finished to the localStorage
 * @param {*} elem 
 */
function rowDone(elem){
    //Change the styling of the task to mark is as finished
	let row = elem.parentElement.parentElement;
    row.classList.add("completed");

    //Find the task that was marked done and store the 'done' property
    for(let i = 0; i < tasklist.length; i++){
        if(tasklist[i].id === elem.id){
             elem.id =  'done';
             tasklist[i].finish = 'done';
        }
    }
    //Set the changed tasklist to localStorage
    localStorage.setItem("tasklist", JSON.stringify(tasklist));
}

/**
 * Function that opens the add task form for user input
 */
function openForm(){
    document.getElementById("add-form").style.display = "block";
    document.getElementById('tName').value = "";
    //Estimation was set to 1 in default
    document.getElementById('est').value = 1;
	document.getElementById("tName").focus(); 
}

/**
 * Function that close the add task form
 */
function closeForm(){
    document.getElementById("add-form").style.display = "none";
}
module.exports = {closeForm, openForm, editRow, checkFields, addTask,rowDone,showTaskList};