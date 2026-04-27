// Show section
function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => {
    sec.style.display = 'none';
  });

  document.getElementById(id).style.display = 'block';
}

// default page
showSection('chat');


// ---------------- CHAT ----------------
function sendMessage() {
  let input = document.getElementById("chatInput");
  let box = document.getElementById("chatBox");

  if (input.value.trim() === "") return;

  let user = document.createElement("p");
  user.textContent = "You: " + input.value;

  let bot = document.createElement("p");
  bot.textContent = "Bot: This is a demo AI response 🤖";

  box.appendChild(user);
  box.appendChild(bot);

  input.value = "";
  box.scrollTop = box.scrollHeight;
}


// ---------------- NOTES ----------------
function saveNote() {
  let input = document.getElementById("noteInput");
  let list = document.getElementById("notesList");

  if (input.value.trim() === "") return;

  let p = document.createElement("p");
  p.textContent = input.value;

  list.appendChild(p);
  input.value = "";
}


// ---------------- TASKS ----------------
function addTask() {
  let input = document.getElementById("taskInput");
  let list = document.getElementById("taskList");

  if (input.value.trim() === "") return;

  let li = document.createElement("li");
  li.textContent = input.value;

  li.onclick = () => li.remove();

  list.appendChild(li);
  input.value = "";
}


// ---------------- ANNOUNCEMENTS ----------------
function addAnnouncement() {
  let input = document.getElementById("announcementInput");
  let list = document.getElementById("announcementList");

  if (input.value.trim() === "") return;

  let li = document.createElement("li");
  li.textContent = input.value;

  list.appendChild(li);
  input.value = "";
}
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  // Save preference
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

// Load saved theme when page opens
window.onload = function () {
  let theme = localStorage.getItem("theme");

  if (theme === "dark") {
    document.body.classList.add("dark-mode");
  }
};
