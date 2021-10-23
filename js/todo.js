const field = document.querySelector('.field');
const button = document.querySelector('.add');
const list = document.querySelector('.list');

function creteTask(value) {
    const task = document.createElement('div');
    task.textContent = value;
    return task;
}

function addTask() {
    if (field.value) {
        const plus = creteTask(field.value);
        list.appendChild(plus);
        field.value = "";
    }
}

button.addEventListener('click', addTask)