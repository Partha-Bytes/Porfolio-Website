function addTask() {
    const newTask = document.createElement('li');
    const taskList = document.getElementById('task-List'); // Match ID with HTML
    newTask.textContent = document.getElementById('inputTask').value;

    if (newTask.textContent.trim() !== "") { // Check if task is not empty
        taskList.appendChild(newTask);
        document.getElementById('inputTask').value = ""; // Clear input after adding
    } else {
        alert("Please enter a task"); // Alert if input is empty
    }
    deleteTask(newTask);
}
function deleteTask(newTask) {
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete"
    newTask.appendChild(deleteBtn)
    deleteBtn.onclick = function() {
        newTask.remove()
    }
}