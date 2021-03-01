//main.js

let bId = 1;

let addT = document.getElementById('btn-add');
let table = document.getElementById('table-content');
let est = document.getElementById('est');
let tName = document.getElementById('tName');
let addForm = document.getElementById('add-form');

let btn;
let rad;
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

function checkFields(){

    if (tName.value != "" &&
        est.value > 0 &&
        est.value < 51) {
            addTask();
        }
}

function addTask(){

    //radio button
    rad = document.createElement('input');
    rad.type = "radio";
    rad.id = "radio"+bId;
    rad.name = "tSelect";
    
    //delete button
	btn = document.createElement('i');
	btn.id = "edit"+bId;
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
    cell2.innerText = document.tName.value;
    cell3.innerHTML = document.est.value;
    cell4.innerHTML = 0;
    cell5.appendChild(btn);

    bId++;
    addForm.style.display = "none";
}

function editRow(elem) {
    let row = elem.parentElement.parentElement;
    row.remove();
    
}

// eslint-disable-next-line no-unused-vars
function openForm(){
    addForm.style.display = "block";
    tName.value = "";
    est.value = 1;
}

// eslint-disable-next-line no-unused-vars
function closeForm(){
    addForm.style.display = "none";
}
module.exports = {closeForm, openForm, editRow, checkFields, addTask};
