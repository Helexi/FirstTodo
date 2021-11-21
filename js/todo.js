const field = document.querySelector('.field');
const button1 = document.querySelector('.add');
let list = document.querySelector('.list');
const total = document.querySelector('.total_value');
const deleteAll = document.querySelector('.delete_all')

let totalArrey = [];


function addTask() {
    createElemrnts(field.value);
    field.value = "";
}

function createElemrnts(value) {
    if (value === "") return;
    const task = document.createElement('div');
    task.className = 'task';
    task.textContent = value;
    list.appendChild(task);

    const btn = document.createElement('button');
    btn.className = 'btn';
    btn.textContent = 'delete';
    task.appendChild(btn);

    btn.addEventListener('click', () => {
        totalArrey.pop(task);
        total.textContent = totalArrey.length;
        list.removeChild(task);
    })

    task.addEventListener('click', () => {
        task.classList.toggle('active');
    })
    totalArrey.push(task);
    console.log(totalArrey.length);
    total.textContent = totalArrey.length;


}

function del_all() {
    list.innerHTML = "";
    totalArrey.length = 0;
    total.textContent = totalArrey.length;
}

deleteAll.addEventListener('click', del_all);
button1.addEventListener('click', addTask)