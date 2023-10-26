
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
    list.setAttribute("class","coler ")
    list.innerHTML = `
        <h3>${toDo.title}</h3>
        <p>Importancia: ${toDo.importance}</p>
        <p>Condición: ${toDo.condition}</p>
        <p>Detalles: ${toDo.details}</p>
        <p>Tiempo para hacerla: ${toDo.time}</p>
        <p>Fecha de creació: ${toDo.date}</p>
    `;

    document.getElementById("studentList").appendChild(list);





});






// Función para agregar tarea
function addtask() {

   
    //valores que vienen
    const name = document.getElementById("title").value;
    const state = document.getElementById("state").value;
    const details = document.getElementById("details").value;
    const time = document.getElementById("time").value;
     const date = document.getElementById("date").valueAsDate.toDateString();

    console.log(date);


    const Task = new Todo({
        title: name,
        state: state,
        details: details,
        date: date,
        time: new Date(),
    });

    console.log(Task);

    Todos.push(Task);
    localStorage.setItem('todo', JSON.stringify(Todos));
    location.reload();
}