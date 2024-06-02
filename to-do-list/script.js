
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskDateTime = document.getElementById("taskDateTime");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var li = document.createElement("li");
        li.textContent = taskInput.value;
        taskList.appendChild(li);
        taskInput.value = "";

        var deleteButton = document.createElement("span");
        deleteButton.innerHTML = '<i class="fas fa-times delete"></i>';
        deleteButton.onclick = function() {
            taskList.removeChild(li);
        };
        li.appendChild(deleteButton);

        var editButton = document.createElement("span");
        editButton.innerHTML = '<i class="fas fa-pencil-alt edit"></i>';
        editButton.onclick = function() {
            var newText = prompt("Enter new text:", li.textContent);
            if (newText !== null) {
                li.textContent = newText;
            }
        };
        li.appendChild(editButton);

        var dateTimeSpan = document.createElement("span");
        dateTimeSpan.textContent = taskDateTime.value;
        dateTimeSpan.classList.add("task-time");
        li.appendChild(dateTimeSpan);
    }
}
