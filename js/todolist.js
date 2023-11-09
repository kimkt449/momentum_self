const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todolist");

let toDos = [];

function savingToDo(newToDo) {
  localStorage.setItem("newToDo", JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  savingToDo();
}

function paintingToDo(newToDoObj) {
  const li = document.createElement("li");
  li.id = newToDoObj.id;
  const span = document.createElement("span");
  span.innerText = newToDoObj.text;
  const button = document.createElement("button");
  button.innerText = "x";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function toDoHandler(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDoInput.value = "";
  toDos.push(newToDoObj);
  paintingToDo(newToDoObj);
  savingToDo();
}

toDoForm.addEventListener("submit", toDoHandler);

const savedToDos = localStorage.getItem("newToDo");

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintingToDo);
}
