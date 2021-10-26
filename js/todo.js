const field = document.querySelector('.field');
const button = document.querySelector('.add');
const list = document.querySelector('.list');

function creteTask(value) {
    const task = document.createElement('div');
    task.textContent = value;
    const check = document.createElement('input');
    check.type = 'checkbox';
    task.appendChild(check);
    check.addEventListener('click', completeTask);
    task.classList.add('task');
    check.classList.add('status');
    return task;
}

function addTask() {
    if (field.value) {
        const plus = creteTask(field.value);
        list.appendChild(plus);
        field.value = "";
    }
}

function completeTask(event) {
    const target = event.target;
    return target;
}

button.addEventListener('click', addTask)