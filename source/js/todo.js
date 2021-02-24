//main.js

let bId = 1;

let addT = document.getElementById('btn-add');
let table = document.getElementById('table-content');

let btn;
let rad;

addT.addEventListener("click", checkFields);

document.getElementById('tName').addEventListener('keyup', function(event) {
    if (event.key == 'Enter') {
        addT.click();
    }
    else if (event.key == 'Escape') {
        document.getElementById('btn-cancel').click();
    }
    event.preventDefault();
});

document.getElementById('est').addEventListener('keyup', function(event) {
    if (event.key == 'Enter') {
        addT.click();
    }
    else if (event.key == 'Escape') {
        document.getElementById('btn-cancel').click();
    }
    event.preventDefault();
});

function checkFields(){

    if (document.getElementById('tName').value != "" &&
        document.getElementById('est').value > 0 &&
        document.getElementById('est').value < 51) {
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
    cell2.innerHTML = document.getElementById("tName").value;
    cell3.innerHTML = document.getElementById("est").value;
    cell4.innerHTML = 0;
    cell5.appendChild(btn);

    //cells appended to row, and row to table
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    row.appendChild(cell5);
    table.appendChild(row);

    bId++;
    document.getElementById("add-form").style.display = "none";
}

function editRow(elem) {
    let row = elem.parentElement.parentElement;
    row.remove();
    
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
