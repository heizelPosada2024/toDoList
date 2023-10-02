//estoy comentando
class User{
    constructor({
        name,
        LastName,
        age,
    }) {
        this.name = name,
        this.LastName = LastName
        this.age = age
    }
};

const jairo = new User({
    name: "Jairo",
    LastName: "Murillo",
    age: "15"
})

const name = prompt("nombre");
const lastName = prompt ("Apellido");
const age = parseFloat (prompt("edad"));

const user = new User ({
    name: name,
    lastName: lastName,
    age: age,
})

console.log(user);

class Owner extends User