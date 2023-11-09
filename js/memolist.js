const memoForm = document.getElementById("memo-form");
const memoInput = memoForm.querySelector("input");
const memoList = document.getElementById("memolist");

let memos = [];

function savingMemo(newMemo) {
  localStorage.setItem("newMemo", JSON.stringify(memos));
}

function deleteMemo(event) {
  const li = event.target.parentElement;
  li.remove();
  memos = memos.filter((memo) => memo.id !== parseInt(li.id));
  savingMemo();
}

function paintingMemo(newMemoObj) {
  const li = document.createElement("li");
  li.id = newMemoObj.id;
  const span = document.createElement("span");
  span.innerText = newMemoObj.text;
  const button = document.createElement("button");
  button.innerText = "x";
  button.addEventListener("click", deleteMemo);
  li.appendChild(span);
  li.appendChild(button);
  memoList.appendChild(li);
}

function memoHandler(event) {
  event.preventDefault();
  const newMemo = memoInput.value;
  const newMemoObj = {
    text: newMemo,
    id: Date.now(),
  };
  memoInput.value = "";
  memos.push(newMemoObj);
  paintingMemo(newMemoObj);
  savingMemo();
}

memoForm.addEventListener("submit", memoHandler);

const savedMemo = localStorage.getItem("newMemo");

if (savedMemo !== null) {
  const parsedMemo = JSON.parse(savedMemo);
  memos = parsedMemo;
  parsedMemo.forEach(paintingMemo);
}
