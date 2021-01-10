/* const objeto = {
    propiedad1 : "valor1",
    propiedad2 : "valor2",
    propiedad3 : "valor3"
}

const obtenerInformacion =()=> {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{resolve(objeto)},4000);}
    )};

obtenerInformacion().then(resultado => console.log(resultado)); */

const objeto = {
    propiedad1 : "valor1",
    propiedad2 : "valor2",
    propiedad3 : "valor3"
}

const obtenerInformacion =(text)=> {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{resolve(text)},Math.random()*200);}
)};

/* obtenerInformacion("Sobamela").then(resultado => console.log(resultado));
obtenerInformacion("My").then(resultado => console.log(resultado));
obtenerInformacion("Bebe").then(resultado => console.log(resultado)); */

const mostrarData = async() =>{
    data1 = await obtenerInformacion("1. Pedro");
    data2 = await obtenerInformacion("2. Luis");
    data3 = await obtenerInformacion("3. Carlos");
    console.log(data1);
    console.log(data2);
    console.log(data3);
}

mostrarData();


/* const mostrarResultado = async() => {
    let resultado = await obtenerInformacion();
    console.log(resultado);
}

mostrarResultado(); */