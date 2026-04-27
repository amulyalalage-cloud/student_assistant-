// Show Sections
function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(sec => {
    sec.style.display = 'none';
  });
  document.getElementById(sectionId).style.display = 'block';
}

// Default Section
showSection('chat');

// ------------------- CHAT -------------------
function sendMessage() {
  let input = document.getElementById("chatInput");
  let chatBox = document.getElementById("chatBox");

  if (input.value.trim() === "") return;

  let userMsg = document.createElement("p");
  userMsg.textContent = "You: " + input.value;
  chatBox.appendChild(userMsg);

  let botMsg = document.createElement("p");
  botMsg.textContent = "Bot: This is a demo AI response.";
  chatBox.appendChild(botMsg);

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}

// ------------------- NOTES -------------------
function saveNote() {
  let noteInput = document.getElementById("noteInput");
  let notesList = document.getElementById("notesList");

  if (noteInput.value.trim() === "") return;

  let note = document.createElement("p");
  note.textContent = noteInput.value;
  notesList.appendChild(note);

  noteInput.value = "";
}

// ------------------- TASKS -------------------
function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskList = document.getElementById("taskList");

  if (taskInput.value.trim() === "") return;

  let li = document.createElement("li");
  li.textContent = taskInput.value;

  li.onclick = () => li.remove();

  taskList.appendChild(li);
  taskInput.value = "";
}

// ------------------- ANNOUNCEMENTS -------------------
function addAnnouncement() {
  let input = document.getElementById("announcementInput");
  let list = document.getElementById("announcementList");

  if (input.value.trim() === "") return;

  let li = document.createElement("li");
  li.textContent = input.value;

  list.appendChild(li);
  input.value = "";
}