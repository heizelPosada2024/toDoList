const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");

taskForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const taskTitle = document.getElementById("task-title").value;
    const taskDescription = document.getElementById("task-description").value;

    if (taskTitle.trim() === "") {
        alert("El título de la tarea no puede estar vacío.");
        return;
    }

    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
        <h3>${taskTitle}</h3>
        <p>${taskDescription}</p>
        <button class="complete-button">Completar</button>
        <button class="delete-button">Eliminar</button>
    `;

    taskList.appendChild(taskItem);

    // Limpiar el formulario
    taskForm.reset();
});

//New Project

const title = document.getElementById("task-title").value;
const state = document.getElementById("task-state").value;
const details = document.getElementById("task-details").value;
const time = document.getElementById("task-time").value;
const date = document.getElementById("task-date").value;
const importance = document.getElementById("task-importance").value;

class Todo {
    constructor({
        title,
        state,
        details,
        time,
        date,
        importance = [],
    }) {
        this.condition = condition;
        this.title = title;
        this.state = state;
        this.details = details;
        this.time = time;
        this.date = date;
        this.importance = importance;
    }
};

// Agregar el evento submit al formulario
document.getElementById("Todo").addEventListener("submit", addtask);

// Función para agregar tarea
function addtask(event) {
    event.preventDefault();

    //valores que vienen
    const name = document.getElementById("title").value;
    const state = document.getElementById("state").value;
    const details = document.getElementById("details").value;
    const time = document.getElementById("time").value;
    const importance = selectedModules.map(importanceName => {
        if (importanceName === "Importante") {
            return Importante;
        } else if (importanceName === "Medio Importante") {
            return MedioImportante;
        } else if (importanceName === "No Importante") {
            return NoImportante;
        }
    });


    const Task = new Todo({
        title: title,
        state: state,
        details: details,
        time: time,
        date: date,
        importance: importance
    });


    const list = document.createElement("div");
    list.classList.add("list");
    list.innerHTML = `
        <h3>${Task.title}</h3>
        <p>Importancia: ${Task.importance}</p>
        <p>Condición: ${Task.condition}</p>
        <p>Detalles: ${Task.details}</p>
        <p>Tiempo para hacerla: ${Task.time}</p>
        <p>Fecha de entrega: ${Task.date}</p>
    `;

    document.getElementById("studentList").appendChild(card);

    // Limpiar el formulario
    document.getElementById("studentForm").reset();
}