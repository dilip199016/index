// Load tasks from local storage
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const taskList = document.getElementById('taskList');

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    tasks.push(taskText);
    updateLocalStorage();
    taskInput.value = '';

    displayTasks();
}

function removeTask(index) {
    tasks.splice(index, 1);
    updateLocalStorage();
    displayTasks();
}

function displayTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${task}</span>
            <button onclick="removeTask(${index})">Remove</button>
        `;
        taskList.appendChild(listItem);
    });
}

function updateLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

displayTasks();
