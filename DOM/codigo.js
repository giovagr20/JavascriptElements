const container = document.querySelector(".container");
document.querySelector(".btn").value = 'COMPRAR';
const createKey = (nombre, modelo, precio) => {
    img = "<img class='llave-img' src='llave.png'>"; 
    nombre = `<h2>${nombre.toUpperCase()}</h2>`;
    modelo = `<h3>${modelo.toUpperCase()}</h3>`;
    precio = `<p>Precio: <b>$${precio}</b></p>`
    return [img, nombre, modelo, precio];
};


let documentFragment = document.createDocumentFragment();

for(let i=0; i<20;i++){

    let modeloRandom = Math.round(Math.random()*10000);
    let precioRandom = Math.round(Math.random()*10+30);
    let llave = createKey(`llave ${i+1}`,`modelo ${modeloRandom}`, `${precioRandom}`);
    let div = document.createElement("DIV");
    div.addEventListener("click", () => {
        document.querySelector(".key-data").value = modeloRandom;
    });
    div.tabIndex = i;
    div.classList.add(`item-${i}`,`flex-item`);
    div.innerHTML = llave;
    documentFragment.appendChild(div);
};

container.appendChild(documentFragment);
