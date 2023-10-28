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

//Función para completar la tarea
function completeTask() {

}

//Función para eliminar la tarea 
function deleteeTask(){
    list.reset

    return deleteTask;
}

function deleteTask(){
    const list = event.target.closest(".list")};
    if (list) {
      list.remove();
    }

function deleteTask(button) {
    var listItem = button.parentElement;
    var lista = listItem.parentElement;
    lista.removeChild(listItem);
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