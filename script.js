"use strict";

//setting up the variables
const taskInput = document.querySelector(".add-task-input");
const addBtn = document.querySelector(".addbtn");
const taskList = document.querySelector(".task-list");

//add button event listener
addBtn.addEventListener("click", function () {
  let taskValue = taskInput.value;
  let newListItem = document.createElement("li");

  // span element for task text
  let spanText = document.createElement("span");
  spanText.textContent = taskValue;

  //add span text to newlistitem and newlistitem to the task list
  newListItem.appendChild(spanText);
  taskList.appendChild(newListItem);
  taskInput.value = "";

  console.log("button is clicked");
});
