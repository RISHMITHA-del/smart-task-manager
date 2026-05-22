function addTask(){

    const taskInput = document.getElementById("taskInput");
    const taskDate = document.getElementById("taskDate");
    const priority = document.getElementById("priority");
    const taskList = document.getElementById("taskList");

    if(taskInput.value === ""){
        alert("Enter task");
        return;
    }

    const taskCard = document.createElement("div");
    taskCard.classList.add("task-card");
    taskCard.classList.add(priority.value);

    const left = document.createElement("div");
    left.classList.add("task-left");

    const top = document.createElement("div");
    top.classList.add("task-top");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const text = document.createElement("span");
    text.innerText = taskInput.value;

    checkbox.onchange = function(){
        if(checkbox.checked){
            text.style.textDecoration = "line-through";
        } else {
            text.style.textDecoration = "none";
        }
    }

    top.appendChild(checkbox);
    top.appendChild(text);

    const dateText = document.createElement("small");
    dateText.innerText = "Due: " + (taskDate.value || "No date");

    left.appendChild(top);
    left.appendChild(dateText);

    const del = document.createElement("button");
    del.innerText = "Delete";
    del.classList.add("delete-btn");

    del.onclick = function(){
        taskCard.remove();
    }

    taskCard.appendChild(left);
    taskCard.appendChild(del);

    taskList.appendChild(taskCard);

    taskInput.value = "";
    taskDate.value = "";
}