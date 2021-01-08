const button = document.querySelector('.button');

button.addEventListener("click", (e) => {
    console.log(e);
});

document.querySelector('.input-texto').addEventListener('keyup', (e) => {
    let teclaPresionada = e.key;
    let nuevoContenido = `La última tecla que se presionó fue: <b> ${teclaPresionada} </b>`
    document.querySelector('.resultado').innerHTML = nuevoContenido;
});

/*input.addEventListener('keyup', (e) => {
    let teclaPresionada = e.key;
    let nuevoContenido = `La última tecla que se presionó fue: <b> ${teclaPresionada} </b>`
    document.querySelector('.resultado').innerHTML = nuevoContenido;
})*/


/*********-------TIIMEOUT */
const tempo1 = setInterval(()=> {
    document.write('Hola');
}, 3000);

const tempo = setTimeout(()=> {
    clearInterval(tempo1)
}, 5000);
