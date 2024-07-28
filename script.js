"use strict";

// setting up variables

const taskInput = document.querySelector(".add-task-input");
const addbtn = document.querySelector(".addbtn");
const taskList = document.querySelector(".task-list");

// adding event listeners
addbtn.addEventListener("click", function () {
  // adding items
  let taskValue = taskInput.value;
  let newListItem = document.createElement("li");

  let taskSpan = document.createElement("span"); // Create a span for task text
  taskSpan.textContent = taskValue; // Set the task text
  newListItem.appendChild(taskSpan); // Append span to list item

  taskList.appendChild(newListItem); // Append list item to task list
  taskInput.value = "";

  // edit and delete items
  let editBtn = document.createElement("button");
  let delBtn = document.createElement("button");
  let completeBtn = document.createElement("button"); // Button to mark task as complete
  editBtn.textContent = "Edit";
  delBtn.textContent = "Delete";
  completeBtn.textContent = "Complete"; // Set text for complete button
  editBtn.classList.add("edit"); // Add class for styling
  delBtn.classList.add("delete"); // Add class for styling
  completeBtn.classList.add("complete"); // Add class for styling
  newListItem.appendChild(editBtn);
  newListItem.appendChild(delBtn);
  newListItem.appendChild(completeBtn);

  // event listeners for editing and deleting
  editBtn.addEventListener("click", function () {
    let editTask = prompt("Edit your task:", taskSpan.textContent); // Prompt for new text

    if (editTask !== null && editTask.trim() !== "") {
      taskSpan.textContent = editTask; // Update only the task text
    }
  });

  delBtn.addEventListener("click", function () {
    newListItem.remove(); // Remove the list item
  });

  completeBtn.addEventListener("click", function () {
    taskSpan.classList.toggle("completed"); // Toggle completed class
  });

  console.log(taskInput.value);
});
