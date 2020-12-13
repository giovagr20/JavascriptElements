class App {
    constructor(descargas, puntuacion, peso) {
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }

    abrirApp() {
        if(this.iniciada == false && this.instalada == true) {
            this.iniciada = true;
            alert("App Iniciada");
        }
    }

    cerrarApp(){
        if(this.iniciada == true && this.instalada == true){
            this.iniciada = false;
            alert("App Cerrada")
        }
    }

    instalarApp(){
        if(this.instalada == false) {
            this.instalada = true;
            alert("App Instalada Correctamente");
        } else {
            alert("Ha ocurrido un error")
        }
    }

    desinstalarApp(){
        if(this.instalada == true) {
            this.instalada = false;
            alert("App Desinstalada Correctamente");
        } else {
            alert("Ha ocurrido un error")
        }
    }

    mostrarInfo(){
        return `Número de descargas: ${this.descargas} <br>
                Puntuacion: ${this.puntuacion} <br>
                Peso app: ${this.peso}`
    }
}

const app = new App("16000","4.6Stars","140MB");

app.instalarApp();
app.abrirApp();

document.write(`${app.mostrarInfo()}`)