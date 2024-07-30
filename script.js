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

  //adding buttons for editing deleting and completing tasks
  let editBtn = document.createElement("button");
  let delBtn = document.createElement("button");
  let completedBtn = document.createElement("button");

  //setting button text content to edit,delete and complete
  editBtn.textContent = "Edit";
  delBtn.textContent = "Delete";
  completedBtn.textContent = "Complete";

  //adding the styles from the css
  editBtn.classList.add("edit");
  delBtn.classList.add("delete");
  completedBtn.classList.add("complete");
  //adding the buttons to the newlist item
  newListItem.appendChild(completedBtn);
  newListItem.appendChild(editBtn);
  newListItem.appendChild(delBtn);

  //editing functionality
  editBtn.addEventListener("click", function () {
    let newInput = prompt("Edit current task", taskValue);
    if (newInput !== null && newInput.length !== 0) {
      spanText.textContent = newInput;
    }
  });

  // deleting button functionality
  delBtn.addEventListener("click", function () {
    newListItem.remove();
  });

  //complete button functionality

  completedBtn.addEventListener("click", function () {
    spanText.classList.toggle("completed");
  });
  console.log(taskValue);
});
