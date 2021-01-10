//get

/* let peticion;

if(window.XMLHttpRequest) peticion = new XMLHttpRequest();
else peticion = new ActiveXObject("Microsoft.XMLHTTP");

peticion.addEventListener("load",()=>{
    if(peticion.status === 200) response = peticion.response;
    else response = "No se ha encontrado el recurso";

    console.log(JSON.parse(response));
});

peticion.open('GET','informacion.txt');

peticion.send(); */

let peticion;

if(window.XMLHttpRequest) peticion = new XMLHttpRequest();
else peticion = new ActiveXObject("Microsoft.XMLHTTP"); 

const body = {
    "name": "Gio",
    "job": "Dev"
}

peticion.addEventListener('onload', ()=> {
    let response;
    if(peticion.status == 201 || peticion.status == 200)  response = peticion.response;
    else response = "No ha cargado la info";

    console.log(JSON.parse(response));
});

peticion.open('POST', 'https://reqres.in/api/users');

peticion.setRequestHeader('Content.Type','application/json; charset=UTF8');
peticion.send(JSON.stringify(body));