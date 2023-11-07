const greeting = document.querySelector("#greeting");
const loginInput = greeting.querySelector("input");
const greetingText = document.querySelector("#greeting_text");

function loginHandler(event) {
  event.preventDefault();
  greeting.classList.add("hidden");
  const username = loginInput.value;
  localStorage.setItem("username", username);
  paintGreeting(username);
}

function paintGreeting(username) {
  greetingText.classList.remove("hidden");
  greetingText.innerText = `Hello beautiful ${username}`;
}

const savedUsername = localStorage.getItem("username");

if (savedUsername === null) {
  greeting.classList.remove("hidden");
  greeting.addEventListener("submit", loginHandler);
} else {
  paintGreeting(savedUsername);
}
