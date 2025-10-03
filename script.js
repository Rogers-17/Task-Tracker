const taskInput = document.getElementById('taskInput'); 
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');
        taskItem.innerHTML = `
            <div>
                <input type="checkbox" class="task-checkbox">
                <span>${taskText}</span>
            </div>
            <div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
});


// let tasks = [
//     {
//         tasks: "Teach my students",
//         completed: false
//     },
//     {
//         tasks: "Learn new technology",
//         completed: false
//     },
//     {
//         tasks: "Complete homework",
//         completed: false
//     }
// ]

// console.log("before")
// console.log("TASKS: ", tasks)

// const addTask = (newTask) => {
//     tasks.push(newTask);
// }

// console.log("after")
// addTask({task: "Do my assignment", completed: false});

// console.log("TASKS: ", tasks)



