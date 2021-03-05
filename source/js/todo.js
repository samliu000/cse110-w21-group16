//main.js

let bId = 1;

let addT = document.getElementById('btn-add');
let table = document.getElementById('table-content');
let est = document.getElementById('est');
let tName =document.getElementById('tName');

let btn;
let rad;
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
        }
}

function showTaskList(){
 
    for(let i = 0; i < tasklist.length; i++){
        //radio button
       rad = document.createElement('input');
       rad.type = "radio";
       rad.id = "radio"+bId;
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
       
       //cells created
        let row = table.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
    
        //cells filled
        cell1.appendChild(rad);
        cell2.innerHTML = tasklist[i].taskName;
        cell3.innerHTML = tasklist[i].estimation;
        cell4.innerHTML = tasklist[i].actual;
        cell5.appendChild(btn); // Remove row button

    }
    document.getElementById("add-form").style.display = "none";
}

function addTask(){

    //radio button
    rad = document.createElement('input');
    rad.type = "radio";
    rad.id = "radio"+bId;
    rad.name = "tSelect";
    

    //delete button
	btn = document.createElement('i');
    btn.id = Date.now();
    btn.className = "fa fa-trash";
	btn.onclick = function() {editRow(this);};

    //cells created
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    
    //cells filled
    cell1.appendChild(rad);
    cell2.innerText = document.getElementById("tName").value;
    cell3.innerHTML = document.getElementById("est").value;
    cell4.innerHTML = 0;
    cell5.appendChild(btn);

    tasklist.push({
        taskName: document.getElementById("tName").value,
        estimation: document.getElementById('est').value,
        actual: 0,
        id: btn.id
    });

    localStorage.setItem("tasklist", JSON.stringify(tasklist));

    bId++;

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

// eslint-disable-next-line no-unused-vars
function openForm(){
    document.getElementById("add-form").style.display = "block";
    document.getElementById('tName').value = "";
    document.getElementById('est').value = 1;
}

// eslint-disable-next-line no-unused-vars
function closeForm(){
    document.getElementById("add-form").style.display = "none";
}
module.exports = {closeForm, openForm, editRow, checkFields, addTask};