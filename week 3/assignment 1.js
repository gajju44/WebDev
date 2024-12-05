
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');


function addTask() {
    const taskText = todoInput.value;

    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

   
    const li = document.createElement('li');
    const textSpan = document.createElement('span');
    textSpan.textContent = taskText;

 
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit-btn');
    editBtn.onclick = function() {
        const newTask = prompt('Edit your task', textSpan.textContent);
        if (newTask !== null && newTask.trim() !== '') {
            textSpan.textContent = newTask;
        }
    };


    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function() {
        li.remove();
    };

 
    li.appendChild(textSpan);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);

   
    todoInput.value = '';
}
