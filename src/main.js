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

class Todo {
    constructor({
        title,
        state,
        details,
        time,
        importance = [],
    }) {
        this.condition = condition;
        this.title = title;
        this.state = state;
        this.details = details;
        this.time = time;
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
        name: name,
        state: state,
        details: details,
        time: time,
        importance: importance
    });


    const card = document.createElement("div");
    card.classList.add("card");
    const moduleNamesWithClasses = modules.map(module => `<br> - ${module.moduleName} (${module.classes} clases) `).join(", ");
    card.innerHTML = `
        <h3>${students.name} ${students.lastName}</h3>
        <p>Username: ${students.userName}</p>
        <p>Age: ${students.age}</p>
        <p>Módulos seleccionados: ${moduleNamesWithClasses}</p>
        <p>Condiciones: ${students.condition}</p>
        
    `;

    document.getElementById("studentList").appendChild(card);

    // Limpiar el formulario
    document.getElementById("studentForm").reset();
}