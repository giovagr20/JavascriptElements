const trabajo = "240 minutos de trabajo";
const estudio = "100 minutos de estudio";
const trabajoPractico = "100 minutos de trabajo practico";
const oficios = "30 minutos de oficios";
const descanso = "10 minutos de descanso";


for(let i=0; i<14;i++) {
    if(i==0) {
        console.group("Semana 1")
    }
    console.log("=========TAREAS=====");
    console.group(`Día ${i+1}`);
    console.log(trabajo);
    console.log(trabajoPractico);
    console.log(estudio);
    console.log(descanso);
    console.log(oficios);
    console.groupEnd();
    if(i==7) {
            console.groupEnd();
            console.group("Semana 2");

    }
}

console.groupEnd();
console.groupEnd();