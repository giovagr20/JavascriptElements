/* let nombre ="Peddro";

const promise = new Promise((resolve, reject) => {
    if(nombre !== "Pedro") reject("Lo siento, el nombre no es Pedro");
    else resolve(nombre);
}) //ctor -> resolve, reject

//console.log(promise) //const promise -> encapsulada a los datos;

promise.then((result)=> {
    console.log(result);
}).catch((err)=>{
    console.log(err);
}); */

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

const obtenerPersona = (id) => {
    return new Promise((res, rej)=> {
        personas[id].nombre === undefined?rej("No se ha encontrado la persona"):res(personas[id]);
    });
}

const obtenerInstagram = (id)=> {
    return new Promise((resolve, reject)=> {
        personas[id].instagram === undefined?reject("No se ha encontrado el instagram"):resolve(personas[id].instagram)})};

let id=0;

obtenerPersona(id).then((persona)=> {
    console.log(persona.nombre);
    return obtenerInstagram(id);
}).then((instagram)=> {
        console.log(instagram)
}).catch((e)=> {
    console.log(e);
});