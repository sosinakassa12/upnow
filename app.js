
const tasksByMood = {
  tired: [
    "Take 5 deep breaths slowly.",
    "Drink a glass of water.",
    "Stretch gently for 2 minutes.",
    "Put on calming music and relax."
  ],
  motivated: [
    "Organize one folder on your desktop.",
    "Write your next 3 micro goals on paper.",
    "Do 10 pushups or 20 jumping jacks.",
    "Clear 3 things from your to-do list."
  ],
  bored: [
    "Tell yourself a joke or find one online.",
    "Play a quick web game.",
    "Try a random Wikipedia article.",
    "Create a new playlist with 3 songs."
  ],
  curious: [
    "Look up a random topic on Wikipedia.",
    "Watch a short educational video.",
    "Read one new blog post on dev.to.",
    "Learn one new keyboard shortcut."
  ],
  overwhelmed: [
    "Close 5 unused tabs right now.",
    "Write down everything on your mind.",
    "Sit still and breathe for 60 seconds.",
    "Delete something that no longer serves you."
  ],
  creative: [
    "Doodle for 60 seconds.",
    "Write a haiku.",
    "Take a photo of something unusual.",
    "Rename a file or project with a funny name."
  ]
};

const suggestionBox = document.getElementById("suggestion");
const buttons = document.querySelectorAll(".mood-buttons button");
const newBtn = document.getElementById("new-suggestion");

let currentMood = null;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    currentMood = button.getAttribute("data-mood");
    showRandomTask(currentMood);
  });
});

newBtn.addEventListener("click", () => {
  if (currentMood) {
    showRandomTask(currentMood);
  }
});

function showRandomTask(mood) {
  const tasks = tasksByMood[mood];
  const task = tasks[Math.floor(Math.random() * tasks.length)];
  suggestionBox.textContent = task;
}
