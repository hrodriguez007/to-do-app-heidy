const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
        //if you add and task is empty, it will show this message
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        //once text has been added, it will execute this
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        //add the cross icon that removes the task
    }
    inputBox.value = "";
    //clear the textbox "Add the task here" after adding each task
    saveData();
    //every time we add a task, the savedata will be called to contain the new tasks
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        //to check off each task with the checked box circle 
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        //to remove a task competely, not check it off the list
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
//stored in browser with the name of "data"

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
//will get all the content listed under "data" from the browser
//display the same added tasks even with refresh
    
showTask();