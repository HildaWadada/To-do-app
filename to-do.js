

let tasks = JSON.parse(localStorage.getItem("tasks")) || [
  { text: "", done: false } // default task if nothing in storage
];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
  

function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => sec.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}
showSection('dashboard'); // default

    function addTask() {
      let taskInput = document.getElementById('taskInput');
      let value = taskInput.value.trim();
      if(!value) return;
      tasks.push({ text: value, done: false });
      taskInput.value = '';
      displayTasks();
    }

    function toggleDone(index) {
      tasks[index].done = !tasks[index].done;
      displayTasks();
    }

    function editTask(index) {
      let newText = prompt("Edit task", tasks[index].text);
      if(newText) {
        tasks[index].text = newText;
        displayTasks();
      }
    }

    function deleteTask(index) {
      tasks.splice(index,1);
      displayTasks();
    }

    function displayTasks() {
      let taskList = document.getElementById('taskList');
      let completedList = document.getElementById('completedTaskList');
      taskList.innerHTML = '';
      completedList.innerHTML = '';

      let total = tasks.length;
      let completed = tasks.filter(t => t.done).length;
      let pending = total - completed;

      document.getElementById('totalOrders').textContent = total;
      document.getElementById('completedOrders').textContent = completed;
      document.getElementById('pendingOrders').textContent = pending;

      tasks.forEach((t, i) => {
        let li = document.createElement('li');
        li.className = t.done ? 'task-item completed' : 'task-item';
        li.innerHTML = `
          ${t.text}
          <span>
            <button class="action-btn complete" onclick="toggleDone(${i})">✔</button>
            <button class="action-btn edit" onclick="editTask(${i})">✎</button>
            <button class="action-btn delete" onclick="deleteTask(${i})">🗑</button>
          </span>
        `;
        if(t.done) completedList.appendChild(li);
        else taskList.appendChild(li);
      });
    }

    function logout() {
      alert("Are you sure you want to Log out?");
      // Here you can redirect or reset the app
      window.location.href = "index.html";
    }

    // Show dashboard by default
    showSection('dashboard');
    displayTasks();

   

   