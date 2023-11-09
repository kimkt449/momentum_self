const clock = document.getElementById("clock");
const calender = document.getElementById("calender");

function clockHandler() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

function dateHandler() {
  const date = new Date();
  const years = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  calender.innerText = `${years}/${month}/${day}`;
}

clockHandler();
setInterval(clockHandler, 1000);

dateHandler();
setInterval(dateHandler, 1000);
