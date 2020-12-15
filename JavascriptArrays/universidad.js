const obtenerInformacion = (materia) => {
    materias = {
        Fisica: ["Pf Perez","Lina", "Isabel", "Giovanni", "Andres"],
        Programacion: ["Pf Giova","Giovanni", "Lina", "Carlos"],
        Logica: ["Pf Isabel","Alejandro", "Isabel", "Lina"],
        Quimica: ["Pf Gay","Giovanni", "Alejandro", "Andres"]
    }
    if(materias[materia] !== undefined) {
        return [materias[materia],materia, materias];
    } else {
        return materias;
    }
}

const mostrarInformacion = materia => {

let informacion = obtenerInformacion(materia);

    if(informacion !== false) {
        let profesor = informacion[0][0];
        let alumnos = informacion[0];
        alumnos.shift();
        document.write(`El profesor de ${informacion[1].toUpperCase()} es ${profesor} <br>
        Los alumnos de la clase son ${alumnos} <br><br>`);
    }
}

const cantidadDeClases = alumno => {
    let informacion = obtenerInformacion();
    let cantidadClases = 0;
    let clasesPresentes = [];
    for(info in informacion) {
        if(informacion[info].includes(alumno)) {
            cantidadClases ++;
            clasesPresentes.push(" "+ info);
        }
    }
    return `${alumno} esta en: ${cantidadClases} clases ${clasesPresentes}<br><br>`;
}

mostrarInformacion("Fisica");
mostrarInformacion("Programacion");
mostrarInformacion("Logica");
mostrarInformacion("Quimica");
document.write(cantidadDeClases("Giovanni"));
document.write(cantidadDeClases("Lina"));