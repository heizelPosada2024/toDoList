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