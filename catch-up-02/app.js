// Data
const tasks = loadTasks();
let filter = "all";

const form = document.querySelector("#add-form");
const taskName = document.querySelector("#task-name");
const count = document.querySelector("#count");
const list = document.querySelector("#tasks");
const emptyMessage = document.querySelector("#empty");
const filterButtons = document.querySelectorAll("[data-filter]");

// Memory
function loadTasks() {
  try {
    const saved = JSON.parse(localStorage.getItem("todo-app"));
    if (Array.isArray(saved) && saved.every(task =>
      task && typeof task.name === "string" && task.name.trim() &&
      typeof task.done === "boolean"
    )) {
      return saved;
    }
  } catch {
    // Missing or unreadable storage starts with an empty list.
  }
  return [];
}

function saveTasks() {
  try {
    localStorage.setItem("todo-app", JSON.stringify(tasks));
  } catch {
    count.textContent += " Your browser could not save changes.";
  }
}

// Display
function displayTasks() {
  const remaining = tasks.filter(task => !task.done).length;
  count.textContent = remaining === 1 ? "1 task left" : remaining + " tasks left";

  for (const button of filterButtons) {
    button.setAttribute("aria-pressed", button.dataset.filter === filter);
  }

  const visibleTasks = tasks.filter(task =>
    filter === "all" || task.done === (filter === "done")
  );
  const emptyMessages = {
    all: "No tasks yet. Try: ___, ___, ___.",
    active: "No active tasks.",
    done: "No completed tasks."
  };
  emptyMessage.hidden = visibleTasks.length > 0;
  emptyMessage.textContent = emptyMessages[filter];

  list.replaceChildren(...visibleTasks.map(task => {
    const row = document.createElement("li");
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;
    checkbox.addEventListener("change", () => {
      task.done = checkbox.checked;
      applyChange();
      const replacement = Array.from(list.children)[visibleTasks.indexOf(task)];
      (replacement?.querySelector("input") || document.querySelector('[aria-pressed="true"]')).focus();
    });

    const name = document.createElement("span");
    name.textContent = task.name;
    label.append(checkbox, name);

    const remove = document.createElement("button");
    remove.type = "button";
    remove.textContent = "Delete";
    remove.setAttribute("aria-label", "Delete " + task.name);
    remove.addEventListener("click", () => {
      tasks.splice(tasks.indexOf(task), 1);
      applyChange();
      const next = list.children[visibleTasks.indexOf(task)] || list.lastElementChild;
      (next?.querySelector("button") || taskName).focus();
    });

    row.append(label, remove);
    return row;
  }));
}

// Actions
function applyChange() {
  displayTasks();
  saveTasks();
}

form.addEventListener("submit", event => {
  event.preventDefault();
  const name = taskName.value.trim();
  if (!name) {
    taskName.value = "";
    taskName.reportValidity();
    return;
  }
  tasks.push({ name, done: false });
  if (filter === "done") filter = "active";
  taskName.value = "";
  applyChange();
  taskName.focus();
});

for (const button of filterButtons) {
  button.addEventListener("click", () => {
    filter = button.dataset.filter;
    displayTasks();
  });
}

displayTasks();
