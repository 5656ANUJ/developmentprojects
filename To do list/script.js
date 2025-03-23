document.addEventListener('DOMContentLoaded',()=>{
const todoInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const todoList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem('tasks'))|| [];
tasks.forEach(task => renderTask (task)
    
);
addTaskBtn.addEventListener("click", () => {
  const taskText = todoInput.value.trim();
  if (taskText === "") return;

  const newTask = {
    id: Date.now(),
    text: taskText,
    completed: false,
  };
  tasks.push(newTask);
  saveTask();
  todoInput.value = ""; //clear input
  console.log(tasks);
});

function renderTask(task){
    console.log(tasks)
}

function saveTask() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

})