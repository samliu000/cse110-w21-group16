//main.js

let bId = 1;

let addT = document.getElementById('btn-add');
let table = document.getElementById('table-content');

let btn;

addT.addEventListener("click", checkFields);


function checkFields(){

    if (document.getElementById("tName").value != "" &&
        document.getElementById("est").value > 0) {
            addTask();
        }
}

function addTask(){

    /*
    var checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.id = 'check-box';

    table.appendChild(checkBox);
    */

    btn = document.createElement('input');
    btn.type = "button";
    btn.id = "edit"+bId;
    btn.onclick = function() {editRow(this)};

    let row = document.createElement('tr');
    let cell1 = document.createElement('td');
    let cell2 = document.createElement('td');
    let cell3 = document.createElement('td');
    let cell4 = document.createElement('td');
    
    cell1.innerHTML = document.getElementById("tName").value;
    cell2.innerHTML = document.getElementById("est").value;
    cell3.innerHTML = "###";
    cell4.appendChild(btn);

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    table.appendChild(row);

    bId++;
    document.getElementById("add-form").style.display = "none";
}


function editRow(elem) {
    let row = elem.parentElement.parentElement;
    row.remove();
    
}

function openForm(){
    document.getElementById("add-form").style.display = "block";
}

function closeForm(){
    document.getElementById("add-form").style.display = "none";
}


