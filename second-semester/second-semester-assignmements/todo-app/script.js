// Function to add a task
function addTask() {
  const taskInput = document.getElementById("task-input");
  const taskText = taskInput.value.trim();

  if (taskText) {
    const taskList = document.getElementById("task-list");

    const taskItem = document.createElement("li");
    taskItem.className = "task-item";

    const taskSpan = document.createElement("span");
    taskSpan.className = "task-text";
    taskSpan.textContent = taskText;
    taskSpan.onclick = () => editTask(taskSpan);

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "X";
    deleteButton.onclick = () => deleteTask(taskItem);

    taskItem.appendChild(taskSpan);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    taskInput.value = "";
  }
}

// Function to edit a task
function editTask(taskSpan) {
  const originalText = taskSpan.textContent;
  const taskItem = taskSpan.parentElement;

  const editInput = document.createElement("input");
  editInput.type = "text";
  editInput.value = originalText;
  editInput.className = "edit-input";

  editInput.onblur = () => {
    taskSpan.textContent = editInput.value.trim() || originalText;
    taskItem.replaceChild(taskSpan, editInput);
  };

  editInput.onkeypress = (e) => {
    if (e.key === "Enter") {
      editInput.blur();
    }
  };

  taskItem.replaceChild(editInput, taskSpan);
  editInput.focus();
}

// Function to delete a task
function deleteTask(taskItem) {
  const taskList = document.getElementById("task-list");
  taskList.removeChild(taskItem);
}
 