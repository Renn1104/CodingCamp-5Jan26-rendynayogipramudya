const taskInput = document.getElementById("taskInput");
const dateInput = document.getElementById("dateInput");
const timeInput = document.getElementById("timeInput");
const addBtn = document.getElementById("addBtn");
const todoBody = document.getElementById("todoBody");
const deleteAll = document.getElementById("deleteAll");
const toggleBtn = document.getElementById("themeToggle");
const filterAll = document.getElementById("filterAll");
const filterPending = document.getElementById("filterPending");
const filterDone = document.getElementById("filterDone");
const searchInput = document.getElementById("searchInput");
const html = document.documentElement;

let todos = [];
let currentFilter = "all";

function sortTodos() {
  todos.sort((a, b) => {
    const dateA = new Date(`${a.date} ${a.time}`);
    const dateB = new Date(`${b.date} ${b.time}`);
    return dateA - dateB;
  });
}

function renderTodo() {
  todoBody.innerHTML = "";

  let filteredTodos = [...todos];

  if (currentFilter === "pending") {
    filteredTodos = filteredTodos.filter((todo) => !todo.done);
  }

  if (currentFilter === "done") {
    filteredTodos = filteredTodos.filter((todo) => todo.done);
  }

  if (searchInput.value.trim() !== "") {
    const keyword = searchInput.value.toLowerCase();
    filteredTodos = filteredTodos.filter((todo) =>
      todo.task.toLowerCase().includes(keyword)
    );
  }

  if (filteredTodos.length === 0) {
    todoBody.innerHTML = `
      <tr>
        <td colspan="5" class="p-6 text-center text-white/60">
          No task found
        </td>
      </tr>
    `;
    return;
  }

  filteredTodos.forEach((todo, index) => {
    const row = document.createElement("tr");
    row.className = "border-b border-white/10";

    row.innerHTML = `
      <td class="p-4 ${todo.done ? "line-through opacity-50" : ""}">
        ${todo.task}
      </td>
      <td class="p-4">${todo.date}</td>
      <td class="p-4">${todo.time}</td>
      <td class="p-4">
        ${
          todo.done
            ? `<span class="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs">Done</span>`
            : `<span class="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs">Pending</span>`
        }
      </td>
      <td class="p-4 flex gap-3">
        <button
          onclick="toggleDone(${index})"
          class="text-blue-400 hover:text-blue-600 transition">
          ✓
        </button>
        <button
          onclick="deleteTodo(${index})"
          class="text-red-400 hover:text-red-600 transition">
          ✕
        </button>
      </td>
    `;

    todoBody.appendChild(row);
  });
}

addBtn.addEventListener("click", () => {
  if (
    taskInput.value.trim() === "" ||
    dateInput.value === "" ||
    timeInput.value === ""
  ) {
    alert("Task, tanggal, dan jam wajib diisi!");
    return;
  }

  todos.push({
    task: taskInput.value,
    date: dateInput.value,
    time: timeInput.value,
    done: false,
  });

  sortTodos();
  renderTodo();

  taskInput.value = "";
  dateInput.value = "";
  timeInput.value = "";
});

function toggleDone(index) {
  todos[index].done = !todos[index].done;
  renderTodo();
}

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodo();
}

deleteAll.addEventListener("click", () => {
  todos = [];
  renderTodo();
});

filterAll.addEventListener("click", () => {
  currentFilter = "all";
  renderTodo();
});

filterPending.addEventListener("click", () => {
  currentFilter = "pending";
  renderTodo();
});

filterDone.addEventListener("click", () => {
  currentFilter = "done";
  renderTodo();
});

searchInput.addEventListener("keyup", renderTodo);

toggleBtn.addEventListener("click", () => {
  html.classList.toggle("light");
  toggleBtn.innerText = html.classList.contains("light")
    ? "☀️ Light"
    : "🌙 Dark";
});
