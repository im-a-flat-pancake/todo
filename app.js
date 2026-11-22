"use strict";

const STORAGE_KEY = "todo-app";
const addForm = document.querySelector("#add-form");
const taskInput = document.querySelector("#task-input");
const taskSearch = document.querySelector("#task-search");
const taskList = document.querySelector("#task-list");
const taskCount = document.querySelector("#task-count");
const emptyMessage = document.querySelector("#empty-message");
const filterButtons = document.querySelectorAll(".filter-button");

let tasks = loadTasks();
let currentFilter = "all";

function loadTasks() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!Array.isArray(saved)) return [];
    return saved.filter((task) =>
      task && typeof task.id === "string" && typeof task.text === "string" && typeof task.done === "boolean"
    );
  } catch {
    return [];
  }
}

function saveTasks() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch {
    // Keep the app usable if browser storage is unavailable.
  }
}

function renderTasks() {
  taskList.replaceChildren();

  const visibleTasks = tasks.filter((task) => {
    const matchesFilter = currentFilter === "active"
      ? !task.done
      : currentFilter === "done"
        ? task.done
        : true;
    const matchesSearch = task.text.toLocaleLowerCase().includes(taskSearch.value.trim().toLocaleLowerCase());
    return matchesFilter && matchesSearch;
  });

  for (const task of visibleTasks) {
    const row = document.createElement("li");
    row.className = `task-row${task.done ? " is-done" : ""}`;

    const checkbox = document.createElement("input");
    checkbox.className = "task-check";
    checkbox.type = "checkbox";
    checkbox.checked = task.done;
    checkbox.setAttribute("aria-label", `Mark ${task.text} as ${task.done ? "not done" : "done"}`);
    checkbox.addEventListener("change", () => {
      task.done = checkbox.checked;
      saveTasks();
      renderTasks();
    });

    const text = document.createElement("span");
    text.className = "task-text";
    text.textContent = task.text;

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.type = "button";
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("aria-label", `Delete ${task.text}`);
    deleteButton.addEventListener("click", () => {
      tasks = tasks.filter((item) => item.id !== task.id);
      saveTasks();
      renderTasks();
    });

    row.append(checkbox, text, deleteButton);
    taskList.append(row);
  }

  const remaining = tasks.filter((task) => !task.done).length;
  taskCount.textContent = `${remaining} ${remaining === 1 ? "task" : "tasks"} left`;
  emptyMessage.hidden = visibleTasks.length !== 0;
  if (tasks.length === 0) {
    emptyMessage.textContent = "No tasks yet. Add one above.";
  } else if (taskSearch.value.trim()) {
    emptyMessage.textContent = "No tasks match your search.";
  } else {
    emptyMessage.textContent = "No tasks in this filter.";
  }
}

taskSearch.addEventListener("input", renderTasks);

addForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = taskInput.value.trim();
  if (!text) return;

  tasks.push({ id: crypto.randomUUID(), text, done: false });
  saveTasks();
  taskInput.value = "";
  taskSearch.value = "";
  currentFilter = "all";
  updateFilterButtons();
  renderTasks();
  taskInput.focus();
});

function updateFilterButtons() {
  for (const button of filterButtons) {
    const selected = button.dataset.filter === currentFilter;
    button.classList.toggle("is-selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  }
}

for (const button of filterButtons) {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;
    updateFilterButtons();
    renderTasks();
  });
}

renderTasks();
