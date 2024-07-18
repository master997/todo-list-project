"use strict";
const taskInput = document.querySelector(".add-task-input");
const addButton = document.querySelector(".add-task-button");
const taskList = document.querySelector(".task-list");

function addTask() {
  console.log("Task has been added");
}
addButton.addEventListener("click", addTask);
