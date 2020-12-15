const materias = {
    fisica: [90,6,4,"fisica"],
    matematica:[84,8,8,"matematica"],
    logica:[92,6,4,"logica"],
    calculo:[91,5,4,"calculo"],
    bbdd:[100,6,4,"bbdd"],
    programacion:[74,6,4,"programacion"]
};

const asistenciaTrimestre = () => {
    for(materia in materias) {
        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materia[materia[2]];

        console.log(materias[materia][3]);
        if(asistencias>=90) {
            console.log("%c   Asistencias en orden", "color:green");
        } else {
            console.log("%c   Faltas de asistencia","color:red");
        }

        if(promedio>=7) {
            console.log("%c    Promedio en orden", "color:green")
        } else {
            console.log("%c    Promedio desaprobado", "color:red")
        }

        if(trabajos>=3) {
            console.log("%c   Trabajaos practicos en orden", "color:green")
        } else {
            console.log("%c   Faltan trabajos practicos", "color: red");
        }
    }
}


asistenciaTrimestre();