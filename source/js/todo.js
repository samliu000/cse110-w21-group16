//main.js

let bId = 1;

let addT = document.getElementById('btn-add');
let table = document.getElementById('table-content');
let isValid = false;
let btn;
let rad;
let tasklist = [];

let myStorage = window.localStorage;
window.addEventListener('DOMContentLoaded', () => {
    // Local storage 
    getTaskList();
    showTaskList();
    addT.addEventListener("click", checkFields);
});

function checkFields() {
    if (document.getElementById('tName').value != "" &&
        document.getElementById('est').value > 0) {
            addTask();
    }
}
function getTaskList(){
    let storedTask = localStorage.getItem('tasklist');
    if(storedTask != null){
        tasklist = JSON.parse(storedTask);
    }
}
function showTaskList(){
 
     for(let i = 0; i < tasklist.length; i++){
         //radio button
        rad = document.createElement('input');
        rad.type = "radio";
        rad.id = "radio"+bId;
        rad.name = "tSelect";
        rad.onclick = function(){updateCounter(this);};
        
    
        //delete button
        //try: <i class="fas fa-trash"></i>
        /*btn = document.createElement('input');
        btn.value = "Delete";
        btn.type = "button";
        btn.id = "edit"+bId;
        btn.onclick = function() {editRow(this);};*/
        
        btn = document.createElement('i');
        btn.id = "edit"+bId;
        btn.className = "fa fa-trash";
        btn.onclick = function() {editRow(this);};
        
        //cells created
         let row = document.createElement('tr');
         let cell1 = document.createElement('td');
         let cell2 = document.createElement('td');
         let cell3 = document.createElement('td');
         let cell4 = document.createElement('td');
         let cell5 = document.createElement('td');
     
         //cells filled
         cell1.appendChild(rad);
         cell2.innerHTML = tasklist[i].taskName;
         cell3.innerHTML = tasklist[i].estimation;
         cell4.innerHTML = tasklist[i].actual;
         cell5.appendChild(btn); // Remove row button
 
         //cells appended to row, and row to table
         row.appendChild(cell1);
         row.appendChild(cell2);
         row.appendChild(cell3);
         row.appendChild(cell4);
         row.appendChild(cell5);
         table.appendChild(row);     
     }
 
     bId++;
     document.getElementById("add-form").style.display = "none";
}

function addTask(){


    //radio button
    rad = document.createElement('input');
    rad.type = "radio";
    rad.id = "radio"+bId;
    rad.name = "tSelect";
    rad.onclick = function(){updateCounter(this);};
    

    //delete button
	//try: <i class="fas fa-trash"></i>
    /*btn = document.createElement('input');
    btn.value = "Delete";
    btn.type = "button";
    btn.id = "edit"+bId;
    btn.onclick = function() {editRow(this);};*/
	
	btn = document.createElement('i');
	btn.id = "edit"+bId;
	btn.className = "fa fa-trash";
	btn.onclick = function() {editRow(this);};

    //cells created
    let row = document.createElement('tr');
    let cell1 = document.createElement('td');
    let cell2 = document.createElement('td');
    let cell3 = document.createElement('td');
    let cell4 = document.createElement('td');
    let cell5 = document.createElement('td');

    //cells filled
    cell1.appendChild(rad);
    cell2.innerHTML = document.getElementById("tName").value; // Name col
    cell3.innerHTML = document.getElementById("est").value;
    cell4.innerHTML = 0;
    cell5.appendChild(btn); // Remove row button

    //cells appended to row, and row to table
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    row.appendChild(cell5);
    table.appendChild(row);     

    // Creating JSON from input
    tasklist.push({
        taskName: document.getElementById("tName").value,
        estimation: document.getElementById('est').value,
        id: bId,
        actual: 0
    });

    localStorage.setItem("tasklist", JSON.stringify(tasklist));

    bId++;
    document.getElementById("add-form").style.display = "none";
}

function updateCounter(elem) {
    document.getElementById('counter').value = elem.parentElement.childNodes[3].value;
}

function editRow(elem) {
    let row = elem.parentElement.parentElement;
    row.remove();
    // for(let i = 0; i < tasklist.length; i++){
    //     if(tasklist[i].id === row.id){
    //         tasklist.splice(i, 1);
    //     }
    // }
    console.log(tasklist);
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
