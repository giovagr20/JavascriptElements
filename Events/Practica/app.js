const alumnos = [{
    nombre: "Giovanni G",
    email: "giova@yopmail.com",
    materia: "Quimica"
},{
    nombre: "Andres G",
    email: "andres@yopmail.com",
    materia: "Programación"
}, {
    nombre: "Lina G",
    email: "lina@yopmail.com",
    materia: "Fisica"
}, {
    nombre: "Isabel G",
    email: "isabel@yopmail.com",
    materia: "Programación"
}, {
    nombre: "Cristina G",
    email: "cristina@yopmail.com",
    materia: "Quimica"
}];

const boton = document.querySelector('.btn');

for (alumno in alumnos) {
    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];

    let htmlCode = `<div class="grid-item name">${nombre}</div>
    <div class="grid-item email">${email}</div>
    <div class="grid-item subject">${materia}</div>
    <div class="grid-item week">
    <select class="choose-week" id="choose-week">
        <option value="Semana 1">Semana 1</option>
        <option value="Semana 2">Semana 2</option>
    </select>
</div>`; 
document.querySelector('.grid-container').innerHTML+= htmlCode;
}


boton.addEventListener('click', (e)=>{
    let elementos = document.querySelectorAll('.week');
    let semanasElegidas = document.querySelectorAll('.choose-week');
    for (elemento in elementos){
        semana = elementos[elemento]
        semana.innerHTML=semanasElegidas[elemento].value;
    }
    document.body.removeChild(boton);
});

