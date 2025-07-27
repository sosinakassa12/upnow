const tasks = [
  "Write 3 things you did right today",
  "Send a check-in text to someone",
  "Close 5 unused tabs right now",
  "Take 5 deep breaths slowly",
  "Organize one folder on your desktop",
  "Doodle for 60 seconds",
  "Learn a keyboard shortcut you didn’t know",
  "Write your next 3 micro goals on paper"
];

document.getElementById("suggest-btn").addEventListener("click", () => {
  const suggestion = tasks[Math.floor(Math.random() * tasks.length)];
  document.getElementById("suggestion").innerText = suggestion;
});
