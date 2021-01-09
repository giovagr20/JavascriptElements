/* try {
    sohfkjdfdds
} catch(error) {
    console.log("Lo siento, hay un error, chupame la pija");
}
 */
// SE USAN CUANDO EL SISTEMA TIENE UNA PROBABILIDAD DE ER */

const sendButton = document.getElementById("btn-nota");

sendButton.addEventListener('click', (e)=> {
    let resultado, mensaje;
    try {
        let prevRes = parseInt(document.getElementById("nota-alumno").value);
        if(isNaN(prevRes)) {
            throw "Payaso"
        }
        mensaje = definirMensaje(4,2,prevRes);
        resultado = verificarAprobacion(prevRes);
    } catch(error) {
        resultado = "¿SOS PAYASO?";
        mensaje = "He visto que has intentado tumbar la pagina, vete a la mierda!";
    }
    abrirModal(resultado, mensaje);
});

const definirMensaje = (prevRes)=>{
    let resultado;
    switch (prevRes) {
        case 0: resultado = "Bruto HDP";
        break;
        case 1: resultado = "Sos malísimo";
        break;
        case 2: resultado = "No entrego trabajos, por eso perdió";
        break;
        case 3: resultado = "Como culito de niño Dios, raspado";
        break;
        case 4: resultado = "Bien por ti, en 4 al profe";
        break;
        case 5: resultado = "Lamiste pijas o qué?";
        break;
        default: resultado=null;
        break;
    }
    return resultado;
}

const verificarAprobacion = (nota1,nota2,prevRes)=>{
    promedio = parseInt(nota1 + nota2 + prevRes)/3;
    if(promedio<3){
        return `<span class="failed">REPROBO</span>`;  
    }   return `<span class="success">APROBADO</span>`;
}

const abrirModal = (resultado, mensaje) => {
    document.querySelector('.resultado').innerHTML = resultado;
    document.querySelector('.mensaje').innerHTML=mensaje;
    let modal = document.querySelector('.modal-background');
    modal.style.display = "flex";
    modal.style.animation = "aparecer 1s forwards";
}