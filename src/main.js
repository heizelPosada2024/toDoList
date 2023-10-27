//New Project

class Todo {
    constructor({
        title,
        state,
        details,
        time,
        date,
        importance = [],
    }) {
        this.title = title;
        this.state = state;
        this.details = details;
        this.time = time;
        this.date = date;
        this.importance = importance;
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
        <buttom onclick="completeTask()" type="submit"> Completar <buttom/>
        <buttom> Eliminar <buttom/>

          <div class=" text-2xl text-center">
                <button onclick="completeTask()">Completar</button>
    `;

    document.getElementById("studentList").appendChild(list);
    list.appendChild(addComplete());

    document.getElementById("studentList").appendChild(list);
    list.appendChild(addDelete());
});

//Función para completar la tarea
function completeTask() {

    list.setAttribute("class","text-xl font-serif text-center text-green-500")
    
    completeTask.addEventListener('click', (e) => {
        const item = e.target.parentElement;
        list.removeChild(item);
    })
    return completeTask;
}

//Función para eliminar la tarea 
function deleteTask(){

}

// Función para agregar tarea
function addtask() {

   
    //valores que vienen
    const name = document.getElementById("title").value;
    const state = document.getElementById("state").value;
    const details = document.getElementById("details").value;
    const date = document.getElementById("date").valueAsDate.toDateString();

    console.log(date);


    const Task = new Todo({
        title: name,
        state: state,
        details: details,
        date: date,
    });

    console.log(Task);

    Todos.push(Task);
    localStorage.setItem('todo', JSON.stringify(Todos));
    location.reload();
}



function addComplete() {
    const addComplete = document.createElement('button');

    addComplete.textContent = "Completar"

    addComplete.addEventListener('click', (e) => {
        const item = e.target.parentElement;
        list.removeChild(item);
    })
    return addComplete;
}

function addDelete() {
    const addDelete = document.createElement('button');

    addDelete.textContent = "X"

    addDelete.addEventListener('click', (e) => {
        const item = e.target.parentElement;
        list.removeChild(item);
    })
    return addDelete;
}