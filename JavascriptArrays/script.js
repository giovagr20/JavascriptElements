class Calculadora {
    constructor(){}

    sumar(num1, num2) {
        return parseInt(num1) + parseInt(num2);
    }
    
    restar(num1, num2) {
        return parseInt(num1) - parseInt(num2);
    }
    
    multiplicar(num1, num2) {
        return parseInt(num1) * parseInt(num2);
    }
    
    dividir(num1, num2) {
        return num2==0 ? "Error Syntax" : parseInt(num1) / parseInt(num2);
    }
    potenciar(num, exp) {
        return num**exp;
    }
    raizCuadrada(num) {
        return Math.sqrt(num);
    }
    raizCubica(num) {
        return Math.cbrt(num);
    }
}

const calculadora = new Calculadora();

alert("¿Elige la operación a realizar");
let operacion = prompt("1. Suma, 2. Resta, 3. Multiplicación, 4. División, 5. Potenciación, 6. Raiz Cuadrada, 7. Raíz Cúbica");

if(operacion == 1) {
    let numero1 = prompt("Primer número suma");
    let numero2 = prompt("Segundo número suma");
    let resultado = calculadora.sumar(numero1, numero2);
    alert(`El resultado es: ${resultado}`);
} else if(operacion == 2) {
    let numero1 = prompt("Primer número resta");
    let numero2 = prompt("Segundo número resta");
    let resultado = calculadora.restar(numero1, numero2);
    alert(`El resultado es: ${resultado}`);
} else if(operacion == 3) {
    let numero1 = prompt("Primer número multiplicacion");
    let numero2 = prompt("Segundo número multiplicacion");
    let resultado = calculadora.multiplicar(numero1, numero2);
    alert(`El resultado es: ${resultado}`);
} else if(operacion == 4) {
    let numero1 = prompt("Primer número división");
    let numero2 = prompt("Segundo número división");
    let resultado = calculadora.dividir(numero1, numero2);
    alert(`El resultado es: ${resultado}`);
} else if(operacion == 5) {
    let numero1 = prompt("Ingresa numero base");
    let exponente = prompt("Ingresa número exponente");
    let resultado = calculadora.potenciar(numero1, exponente);
    alert(`El resultado es: ${resultado}`);
} else if(operacion == 6) {
    let numero1 = prompt("Ingresa numero");
    let resultado = calculadora.raizCuadrada(numero1);
    alert(`El resultado es: ${resultado}`);
} else if(operacion == 7){
    let numero1 = prompt("Ingresa numero");
    let resultado = calculadora.raizCubica(numero1);
    alert(`El resultado es: ${resultado}`);
} else {
    alert("Opción inválida")
}