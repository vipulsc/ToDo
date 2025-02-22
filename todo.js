const input = document.querySelector(".listInput");
const add = document.querySelector(".addTask");
const field = document.querySelector(".tasksPlace");
const error = document.querySelector(".error");

function removeDisplay() {
  error.textContent = "";
}

function removeMessage(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

add.addEventListener("click", () => {
  if (input.value == "") {
    error.textContent = "Please Enter A Valid Task";
    removeMessage(5000).then(removeDisplay);
    return;
  }
  const li = document.createElement("li");
  li.classList.add("individualTasks");

  const newTask = document.createElement("span");
  newTask.textContent = input.value;

  const removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  removeButton.classList.add("removeButton");

  removeButton.addEventListener("click", () => {
    removeMessage(500).then(() => {
      error.textContent = "Task removed successfully";
    });
    li.remove();
  });

  li.appendChild(newTask);
  li.appendChild(removeButton);
  field.append(li);

  removeMessage(500).then(() => {
    error.textContent = "Task added successfully";
  });
  input.value = "";

  removeMessage(3000).then(() => {
    if (
      error.textContent === "Task added successfully" ||
      error.textContent === "Task removed successfully"
    ) {
      removeDisplay();
    }
  });
});
