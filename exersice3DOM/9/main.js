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
  refreshTable(todos);
}

function sortTableAsc() {
  todos.sort(function (a, b) {
    let x = a.todo.toLowerCase();
    let y = b.todo.toLowerCase();
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  });
  refreshTable(todos);
}
function sortTableDesc() {
  todos.sort(function (a, b) {
    let x = a.todo.toLowerCase();
    let y = b.todo.toLowerCase();
    if (x < y) {
      return 1;
    }
    if (x > y) {
      return -1;
    }
    return 0;
  });
  refreshTable(todos);
}

document.addEventListener("DOMContentLoaded", () => {
  todos = getLocalStorage() || [];
  refreshTable(todos);
  let button = document.getElementsByTagName("button")[0];

  button.addEventListener("click", addTodo);

  const ascending = document.getElementById("ascending");
  const descending = document.getElementById("descending");

  ascending.addEventListener("click", sortTableAsc);
  descending.addEventListener("click", sortTableDesc);
});

function refreshTable(todos) {
  let table = document.getElementsByTagName("table")[0];
  let tableHoder = document.getElementById("heder");
  table.innerHTML = "";
  table.appendChild(tableHoder);

  todos.forEach((todo, index) => {
    let newRow = document.createElement("tr");
    let newId = document.createElement("td");
    let newTodo = document.createElement("td");
    let newStatus = document.createElement("td");
    let newActions = document.createElement("td");

    let newBtnstatus = document.createElement("button");
    newBtnstatus.textContent = "Chenge status";

    let newBtnEdit = document.createElement("button");
    newBtnEdit.textContent = "Edit";

    let newBtnDelete = document.createElement("button");
    newBtnDelete.textContent = "Delete";

    newBtnstatus.addEventListener("click", () => {
      if (todo.status === "active") {
        todo.status = "done";
      } else if (todo.status === "done") {
        todo.status = "active";
      }

      setLocalStorage();
      refreshTable(todos);
    });

    newBtnEdit.addEventListener("click", () => {
      let input = document.getElementsByTagName("input")[0];
      if (input.value.trim() === "") return;
      todo.todo = input.value.trim();
      input.value = "";

      setLocalStorage();
      refreshTable(todos);
    });

    newBtnDelete.addEventListener("click", () => {
      todos.splice(index, 1);

      setLocalStorage();
      refreshTable(todos);
    });

    newId.innerText = todo.id.substring(0, 3) + "...";
    newTodo.innerText = todo.todo;
    newStatus.innerText = todo.status;

    if (todo.status === "active") {
      newTodo.style.textDecoration = "none";
    } else if (todo.status === "done") {
      newTodo.style.textDecoration = "line-through";
    }

    table.appendChild(newRow);
    newRow.append(newId, newTodo, newStatus, newActions);
    newActions.append(newBtnstatus, newBtnEdit, newBtnDelete);
  });
}
