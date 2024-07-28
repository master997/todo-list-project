"use strict";

// setting up variables

const taskInput = document.querySelector(".add-task-input");
const addbtn = document.querySelector(".addbtn");
const taskList = document.querySelector(".task-list");

// adding event listeners
addbtn.addEventListener("click", function () {
  let taskValue = taskInput.value;
  let newListItem = document.createElement("li");
  newListItem.textContent = taskValue;
  taskList.appendChild(newListItem);
  taskInput.value = "";
  console.log("button is clicked");
});
