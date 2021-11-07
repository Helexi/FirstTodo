const field = document.querySelector('.field');
const button = document.querySelector('.add');
const list = document.querySelector('.list');
let id = 1;

function createTask(value) {
    const task = document.createElement('div');
    task.innerHTML = value;
    task.classList.add('task');
    task.id = id;
    id++;
    creaeCheckBox(task);
    createIcon(task);
    return task;
}

function createIcon(task) {
    const deleteIcon = document.createElement('div');
    deleteIcon.classList.add('del')
    deleteIcon.innerHTML = '&#10060;';
    deleteIcon.addEventListener('click', deleteTask);
    task.appendChild(deleteIcon);
}

function deleteTask(event) {
    document.getElementById(event.target.parentElement.id).remove();
}

function creaeCheckBox(task) {
    const check = document.createElement('input');
    check.type = 'checkbox';
    check.addEventListener('click', completeTask);
    check.classList.add('status');
    task.appendChild(check);
}



function addTask() {
    if (field.value) {
        const plus = createTask(field.value);
        list.appendChild(plus);
        field.value = "";
    }
}

function completeTask(event) {
    console.log(event);
    const target = event.target;
    if (target.checked) {
        target.parentElement.classList.add("succsess");
    } else { target.parentElement.classList.remove("succsess"); }
}

button.addEventListener('click', addTask)