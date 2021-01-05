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