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

/* class Persona {
    constructor(nombre, instagram) {
        this.nombre = nombre;
        this.instagram = instagram;
    }
};

/* console.log(new Persona("Pedro chupa pitos", "@chupameelpito")); */


/*--------- CALLBACKS ---------------*/

class Persona {
    constructor(nombre, instagram) {
        this.nombre = nombre;
        this.instagram = instagram;
    }
};

const data = [
    ["Giova","Id1"],
    ["Alex","Id2"],
    ["Carlos","Id3"],
    ["Isa","Id4"],
    ["Lina"],
]

const personas = [];

for(let i= 0; i<data.length;i++) {
    personas[i] = new Persona(data[i][0], data[i][1]);
}

const obtenerPersona = (id, cb) => {
    personas[id].nombre == undefined ?
    cb("No se ha encontrado la persona"):
    cb(null,personas[id],id);
}

const obtenerInstagram = (id, cb)=> {
    personas[id].instagram === undefined?cb("No se ha encontrado EL INSTAGRAM"):cb(null, personas[id].instagram);
}

obtenerPersona(3, (err, persona, id)=> {
    if(err) {
        console.log(err)
    } else {
        console.log(persona.nombre)
        console.log(obtenerInstagram(id, (err, instagram)=> {
            err?console.log(err):console.log(instagram); //TERNARIO
        }));
    }
});