//Script.js

myStorage = window.localStorage;
window.addEventListener('DOMContentLoaded', () =>{
    if(localStorage.getItem('TaskList') == null){
        var numRows = document.getElementById("table-content").childNodes.length;
        var allTask = [];
        for(var i = 0; i < numRows; i ++){
            var taskName = document.getElementById("table-content").childNodes[i].cells[1].textContent;
            var estimation = document.getElementById("table-content").childNodes[i].cells[2].textContent;
            var actual = document.getElementById("table-content").childNodes[i].cells[3].textContent;
            var jsonObj = {
                "Task": taskName, 
                "Estimation": estimation,
                "Actual": actual
            };
            allTask.push(jsonObj);
            console.log(allTask);
        }
        localStorage.setItem("TaskList", allTask);
    }
});