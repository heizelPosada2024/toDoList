//New Project

class Todo {
    constructor({
        title,
        state,
        details,
        time,
        date,
        importance,
        id,
    }) {
        this.title = title;
        this.state = state;
        this.details = details;
        this.time = time;
        this.date = date;
        this.importance = importance;
        this.id = id;
    }
};

let Todos = JSON.parse(localStorage.getItem('todo')) || [];

Todos.map(function (toDo) {
  
    const list = document.createElement("div");
    list.classList.add("list");
    list.setAttribute("class","text-xl font-serif text-center")
    list.innerHTML = `
        <br>
        <h3>Titulo: ${toDo.title}</h3>
        <p>Estado: ${toDo.state}</p>
        <p>Detalles: ${toDo.details}</p>
        <p>Fecha de entrega: ${toDo.date}</p>
        <p>Importancia: ${toDo.importance}</p>
        <br>

        <div class=" text-2xl text-center text-green-800">
            <button data-task-id="${toDo.id}" onclick="completeTask(this)">Completar</button>
            <br>
        </div>
        <div class=" text-2xl text-center text-red-700">
            <button data-task-id="${toDo.id}" onclick="deleteTask(this)">Eliminar</button>
        </div>
    `;

    document.getElementById("studentList").appendChild(list);
});

//Creando el id para cada tarea
function generateUniqueID() {
    const timestamp = new Date().getTime();
    const random = Math.floor(Math.random() * 1000);
    return timestamp + '-' + random;
}

// Función para agregar tarea
function addtask() {

    //valores que vienen
    const name = document.getElementById("title").value;
    const state = document.getElementById("state").value;
    const details = document.getElementById("details").value;
    const date = document.getElementById("date").valueAsDate.toDateString();
    const importance = document.getElementById("importance").value;
    const id = generateUniqueID();

    const Task = new Todo({
        title: name,
        state: state,
        details: details,
        date: date,
        importance: importance,
        id: id,
    });

    console.log(Task);

    Todos.push(Task);
    localStorage.setItem('todo', JSON.stringify(Todos));
    location.reload();
}

//Función para completar tareas
function completeTask(button) {
    const taskId = button.getAttribute("data-task-id");
    const taskIndex = Todos.findIndex((toDo) => toDo.id === taskId);
    
    if (taskIndex !== -1) {
        Todos[taskIndex].state = "Completada";
        saveAndUpdateTasks();
    }
}

//Función para eliminar tareas
function deleteTask(button) {
    const taskId = button.getAttribute("data-task-id");
    const taskIndex = Todos.findIndex((toDo) => toDo.id === taskId);
    
    if (taskIndex !== -1) {
        Todos.splice(taskIndex, 1);
        saveAndUpdateTasks();
    }
}

//Función para guardar los cambios
function saveAndUpdateTasks() {
    localStorage.setItem('todo', JSON.stringify(Todos));
    location.reload();
}