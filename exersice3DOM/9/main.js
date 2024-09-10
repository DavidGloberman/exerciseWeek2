let todos = [];

function generateId() {
  return Math.random().toString(16).slice(2) + Date.now().toString(16);
}
function getLocalStorage() {
  return JSON.parse(localStorage.getItem("todos"));
}
function setLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function clearTable() {
  let table = document.getElementsByTagName("table")[0];
  let tableHoder = document.getElementById("heder");
  table.innerHTML = "";
  table.appendChild(tableHoder);
}
function ChengeStatusTodo(todo) {
  if (todo.status === "active") {
    todo.status = "done";
  } else if (todo.status === "done") {
    todo.status = "active";
  }
}
function editTodo(todo) {
  let input = document.getElementsByTagName("input")[0];
  if (input.value.trim() === "") return;
  todo.todo = input.value.trim();
  input.value = "";
}
function deleteTodo(idx) {
  todos.splice(idx, 1);
}
function setActionsEventListeners(actionButtons, todo, idx) {
  actionButtons.newButtonStatus.addEventListener("click", () => {
    ChengeStatusTodo(todo);
    setLocalStorage();
    refreshTable();
  });

  actionButtons.newButtonEdit.addEventListener("click", () => {
    editTodo(todo);
    setLocalStorage();
    refreshTable();
  });

  actionButtons.newButtonDelete.addEventListener("click", () => {
    deleteTodo(idx);
    setLocalStorage();
    refreshTable();
  });
}

function createActions(todo, idx) {
  let newActions = document.createElement("td");

  let newButtonStatus = document.createElement("button");
  let newButtonEdit = document.createElement("button");
  let newButtonDelete = document.createElement("button");

  newButtonStatus.textContent = "Chenge status";
  newButtonEdit.textContent = "Edit";
  newButtonDelete.textContent = "Delete";

  setActionsEventListeners(
    { newButtonStatus, newButtonEdit, newButtonDelete },
    todo,
    idx
  );

  newActions.append(newButtonStatus, newButtonEdit, newButtonDelete);
  return newActions;
}

function createTodoElements(todo, idx) {
  let newRow = document.createElement("tr");

  let newId = document.createElement("td");
  let newTodo = document.createElement("td");
  let newStatus = document.createElement("td");

  newId.innerText = todo.id.substring(0, 3) + "...";
  newTodo.innerText = todo.todo;
  newStatus.innerText = todo.status;

  if (todo.status === "active") {
    newTodo.style.textDecoration = "none";
  } else if (todo.status === "done") {
    newTodo.style.textDecoration = "line-through";
  }

  let newActions = createActions(todo, idx);

  newRow.append(newId, newTodo, newStatus, newActions);
  return newRow;
}
function buildTable() {
  let table = document.getElementsByTagName("table")[0];
  todos.forEach((todo, index) => {
    let newRow = createTodoElements(todo, index);
    table.append(newRow);
  });
}
function addTodo() {
  let input = document.getElementsByTagName("input")[0];
  if (input.value.trim() === "") return;

  const newTodo = {
    id: generateId(),
    todo: input.value.trim(),
    status: "active",
  };

  todos.push(newTodo);
  input.value = "";

  setLocalStorage();
  refreshTable();
}
function refreshTable() {
  clearTable();
  buildTable();
}

function sortTableAsc() {
  todos.sort((a, b) => a.todo.localeCompare(b.todo));
  refreshTable();
}
function sortTableDesc() {
  todos.sort((a, b) => b.todo.localeCompare(a.todo));
  refreshTable();
}

document.addEventListener("DOMContentLoaded", () => {
  todos = getLocalStorage() || [];
  refreshTable();

  let button = document.getElementsByTagName("button")[0];
  button.addEventListener("click", addTodo);

  const ascending = document.getElementById("ascending");
  const descending = document.getElementById("descending");

  ascending.addEventListener("click", sortTableAsc);
  descending.addEventListener("click", sortTableDesc);
});
