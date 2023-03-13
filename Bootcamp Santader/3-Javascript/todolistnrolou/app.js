"use strict";
const criarItem = (toDo, status = "") => {
  const item = document.createElement("label");
  item.classList.add("todo__item");
  item.innerHTML = `
  <input type = 'checkbox' ${status}>
  <div>${toDo}</div>
  <input type = 'button' value='x'>`;

  document.getElementById("todoList").appendChild(item);
};
