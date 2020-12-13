class Celulares {
    constructor(color, peso, resolucionPantalla, resolucionCamara, ram) {
        this.color = color;
        this.peso = peso;
        this.resolucionPantalla = resolucionPantalla;
        this.resolucionCamara = resolucionCamara;
        this.ram = ram;
        this.encendido = false;
    }

    botonEncendido() {
        if(this.encendido == false) {
            alert("Celular apagado");
            this.encendido == true;
        } else {
            alert("Celular prendido");
        }
        
        //this.encendido == false ? alert("celular prendido") : alert("celular apagado"); 
    }

    reiniciarCelular() {
        this.encendido == true ? alert("Reiniciando celular") : alert("El celular está apagado");
    }

    tomarFotos() {
        alert(`Foto tomada en una resolución de: ${this.resolucionCamara}`);
    }
    grabarVideo(){
        alert(`Grabando video en: ${this.resolucionCamara}`);
    }
    mostrarInfo(){
        return `
        Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso}</b><br>
        Resolucion Camara: <b>${this.resolucionCamara}</b><br>
        Resolucion Pantalla: <b>${this.resolucionPantalla}</b><br>
        Ram: <b>${this.ram}</b><br>
        `
    }
}

class CelularesAltaGama extends Celulares{
    constructor(color, peso, resolucionPantalla, resolucionCamara, ram, resolucionCamaraExtra) {
        super(color, peso, resolucionPantalla, resolucionCamara, ram);
        this.resolucionCamaraExtra = resolucionCamaraExtra;
    }

    grabarVideoLento(){
        alert("Estás grabando en cámara lenta")
    }
    reconocimientoFacial(){
        alert("Iniciando reconocimiento...")
    }
    mostrarInfoGamaAlta(){
        return this.mostrarInfo() + `Resolución cámara extra: ${this.resolucionCamaraExtra}<br>` 
    }   
}

const celular1 = new Celulares("Rojo","155g", "5.5pg", "Full HD", "2gb");
const celular2 = new Celulares("Azul","120g", "4pg", "480p", "4gb");
const celular3 = new Celulares("Rojo","200g", "5pg", "HD", "3gb");

celular1.botonEncendido();
celular1.reiniciarCelular();
celular1.tomarFotos();
celular1.grabarVideo();

celular2.botonEncendido();
celular2.reiniciarCelular();
celular2.tomarFotos();
celular2.grabarVideo();

celular3.botonEncendido();
celular3.reiniciarCelular();
celular3.tomarFotos();
celular3.grabarVideo();

document.write(`${celular1.mostrarInfo()} <br>
                ${celular2.mostrarInfo()} <br>
                ${celular3.mostrarInfo()}`);


const celularGamaAlta1 = new CelularesAltaGama("Gris","150g", "7.5pg", "Full HD", "4gb","4k");
const celularGamaAlta2 = new CelularesAltaGama("Blanco","160g", "4.5pg", "HD", "3gb", "8k");

document.write(`====== <b>CELULARES ALTA GAMA</b> ========<br>
                ${celularGamaAlta1.mostrarInfoGamaAlta()} <br>
                ${celularGamaAlta1.mostrarInfoGamaAlta()} <br>`);