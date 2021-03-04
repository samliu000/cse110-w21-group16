//main.js

let addT = document.getElementById('btn-add');
let table = document.getElementById('table-content');
let est = document.getElementById('est');
let tName =document.getElementById('tName');

let btn;
let rad;
let done;

let tasklist = [];

//Added if statement for testing
    if(addT){
    addT.addEventListener("click", checkFields);
    }


if(est){
    est.addEventListener('keydown', function(event) {
        if (event.key == 'e' || event.key == '+' || event.key == '-') {
            event.preventDefault();
        }
    });
}

if(tName){
        tName.addEventListener('keyup', function(event) {
        if (event.key == 'Enter') {
            addT.click();
        }
        else if (event.key == 'Escape') {
            document.getElementById('btn-cancel').click();
        }
        event.preventDefault();
    });
}

if(est){
    est.addEventListener('keyup', function(event) {
    if (event.key == 'Enter') {
        addT.click();
    }
    else if (event.key == 'Escape') {
        document.getElementById('btn-cancel').click();
    }
    event.preventDefault();
});
}

window.addEventListener('DOMContentLoaded', () => {
    // Local storage 
    let storedTask = localStorage.getItem('tasklist');
    if(storedTask != null){
        tasklist = JSON.parse(storedTask);
        showTaskList();
    }
    addT.addEventListener("click", checkFields);
});

function checkFields(){

    if (document.getElementById('tName').value != "" &&
        document.getElementById('est').value > 0 &&
        document.getElementById('est').value < 51) {
            addTask();
            return true;
        }
    return false;
}

function showTaskList(){
 
    for(let i = 0; i < tasklist.length; i++){
        //radio button
       rad = document.createElement('input');
       rad.type = "radio";
       rad.id = tasklist[i].id;
       rad.name = "tSelect";
       
   
       //delete button
       //try: <i class="fas fa-trash"></i>
       /*btn = document.createElement('input');
       btn.value = "Delete";
       btn.type = "button";
       btn.id = "edit"+bId;
       btn.onclick = function() {editRow(this);};*/
       
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
        let row = table.insertRow(-1);
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
        cell5.appendChild(btn); // Remove row button
        if(tasklist[i].finish != "done"){
            cell1.appendChild(rad);
            cell6.appendChild(done);
        }else{
            row.classList.add("completed");
        }

    }
    document.getElementById("add-form").style.display = "none";
}

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
	
	//<i class="fas fa-check-square"></i>

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

    tasklist.push({
        taskName: document.getElementById("tName").value,
        estimation: document.getElementById('est').value,
        actual: 0,
        id: btn.id,
        finish: done.id
    });

    localStorage.setItem("tasklist", JSON.stringify(tasklist));

    document.getElementById("add-form").style.display = "none";
}

function editRow(elem) {
    let row = elem.parentElement.parentElement;
    row.remove();

    for(let i = 0; i < tasklist.length; i++){
        if(tasklist[i].id === elem.id){
             tasklist.splice(i, 1);
        }
    }
    localStorage.setItem("tasklist", JSON.stringify(tasklist));
    
}

function rowDone(elem){
	let row = elem.parentElement.parentElement;
    row.classList.add("completed");
    for(let i = 0; i < tasklist.length; i++){
        if(tasklist[i].id === elem.id){
             elem.id =  'done';
             tasklist[i].finish = 'done';
             console.log(tasklist[i].finish);
        }
    }
    localStorage.setItem("tasklist", JSON.stringify(tasklist));
}

// eslint-disable-next-line no-unused-vars
function openForm(){
    document.getElementById("add-form").style.display = "block";
    document.getElementById('tName').value = "";
    document.getElementById('est').value = 1;
	document.getElementById("tName").focus(); 
}

// eslint-disable-next-line no-unused-vars
function closeForm(){
    document.getElementById("add-form").style.display = "none";
}
module.exports = {closeForm, openForm, editRow, checkFields, addTask};
