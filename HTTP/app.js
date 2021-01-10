let peticion;

if(window.XMLHttpRequest) peticion = new XMLHttpRequest();
else peticion = new ActiveXObject("Microsoft.XMLHTTP");

peticion.addEventListener("load",()=>{
    if(peticion.status === 200) response = peticion.response;
    else response = "No se ha encontrado el recurso";

    console.log(JSON.parse(response));
});

peticion.open('GET','informacion.txt');

peticion.send();