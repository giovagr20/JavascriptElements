const materias = {
    Fisica: ["Pf Perez","Lina", "Isabel", "Giovanni", "Andres"],
    Programacion: ["Pf Giova","Giovanni", "Lina", "Carlos"],
    Logica: ["Pf Isabel","Alejandro", "Isabel", "Lina"],
    Quimica: ["Pf Gay","Giovanni", "Alejandro", "Andres"]
}

const inscribir = (alumno, materia) => {
    let personas = materias[materia];
    if(alumno.length >= 3) {
        document.write(`Lo sentimos ${alumno}, las clases de ${materia} ya están ocupadas <br><br>`);
    } else {
        personas.push(alumno);
        document.write(personas);
    }
}

inscribir("Liz", "Fisica");