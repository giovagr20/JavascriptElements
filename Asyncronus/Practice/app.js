const materiasHTML = document.querySelector('.materias');

const materias = [
    {
        nombre: "Logica",
        nota: 5.0
    },
    {
        nombre: "Inteligencia Artificial",
        nota: 4.3
    },
    {
        nombre: "Fisica 2",
        nota: 3.5
    },
    {
        nombre: "Programación 2",
        nota: 3.7
    },
    {
        nombre: "Bases de datos 1",
        nota: 4.8
    },
    {
        nombre: "Calculo 2",
        nota: 3.9
    },
    {
        nombre: "Matematicas Discretas 2",
        nota: 3.0
    }];

const obtenerMateria = (id) => {
    return new Promise((resolve, reject)=> {
        materia = materias[id];
        if (materia === undefined) reject("La materia no existe");
        else setTimeout(()=> {
            resolve(materia)
        }, Math.random()*400);
    })
}


const devolverMaterias = async () => {
    let materia = [];
    for(let i=0;i<materias.length;i++) {
        materia[i] = await obtenerMateria(i);
        
    let newHTMLCode = 
    `<div class="materia">
        <div class="nombre">${materia[i].nombre}</div>
        <div class="nota">${materia[i].nota}</div>
    </div>`;
    materiasHTML.innerHTML += newHTMLCode;
    }
}

devolverMaterias();


/* obtenerMateria(4).then(resultado => console.log(resultado));
obtenerMateria(0).then(resultado => console.log(resultado));
obtenerMateria(3).then(resultado => console.log(resultado));
obtenerMateria(8).then(resultado => console.log(resultado)); */
