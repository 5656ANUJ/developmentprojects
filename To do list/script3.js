// Select DOM elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Add task event listener
addTaskBtn.addEventListener("click", function () {
  const taskText = taskInput.value.trim();
  
  if (taskText !== "") {
    // Create a new task item
    const taskDiv = document.createElement("div");
    taskDiv.classList.add(
      "bg-gray-100",
      "text-gray-800",
      "rounded-xl",
      "w-[90%]",
      "h-14",
      "p-4",
      "flex",
      "items-center",
      "justify-between",
      "shadow-md"
    );

    // Add task content
    const taskSpan = document.createElement("span");
    taskSpan.classList.add("text-lg", "font-medium");
    taskSpan.textContent = taskText;

    // Add delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("text-red-500", "hover:text-red-700", "transition", "duration-200");
    deleteBtn.textContent = "❌";

    // Delete task functionality
    deleteBtn.addEventListener("click", function () {
      taskDiv.remove();
    });

    // Append task content and delete button to taskDiv
    taskDiv.appendChild(taskSpan);
    taskDiv.appendChild(deleteBtn);

    // Append taskDiv to the task list
    taskList.appendChild(taskDiv);

    // Clear the input field after adding task
    taskInput.value = "";
  }
});

// Optional: Allow pressing 'Enter' to add a task
taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTaskBtn.click();
  }
});
