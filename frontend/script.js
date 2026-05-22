function addTask(){

    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if(taskInput.value === ""){
        alert("Please enter a task");
        return;
    }

    const taskCard = document.createElement("div");
    taskCard.classList.add("task-card");

    taskCard.innerHTML = `
        <span>${taskInput.value}</span>
        <button class="delete-btn">Delete</button>
    `;

    taskCard.querySelector(".delete-btn").addEventListener("click", function(){
        taskCard.remove();
    });

    taskList.appendChild(taskCard);

    taskInput.value = "";
}