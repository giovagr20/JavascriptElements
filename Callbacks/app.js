/* // CALLBACKS => Función dentro de otro función

function prueba(callback) {
    callback("pedro chupame el pito");
}

// NORMAL 
prueba(function decirNombre(nombre){
    console.log(nombre);
},5000);

//flecha
prueba(nombre => console.log(nombre)); */

class Persona {
    constructor(nombre, instagram) {
        this.nombre = nombre;
        this.instagram = instagram;
    }
};

/* console.log(new Persona("Pedro chupa pitos", "@chupameelpito")); */

const data = [
    ["G","I"],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
]

let personas = [];