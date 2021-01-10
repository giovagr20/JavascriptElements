/*---- GET *----*/

const boton = document.querySelector('.btn')
const respuesta = document.querySelector('.respuesta');

const bodyPost = {
    "name": "Gio",
    "job": "Developer"
}

boton.addEventListener('click', (e)=> {
    const id = document.getElementById("id").value;
    console.log(id);
    //makeRequest(id);
    makeRequestAsync(id);
    //makePostRequest(bodyPost);
});


let response;
const makeRequest = (id) => {
    response = fetch(`https://reqres.in/api/users/${id.toString()}`)
       .then(res=>res.json())
       .then(res => console.log(res));

       respuesta.hidden = false;
       respuesta.innerHTML += response ;
}

//METHODS
/*
JSON
TEXT
BLOB --IMG
formData
*/

const makeRequestAsync = async(id)=> {
    let response = await fetch(`https://reqres.in/api/users/${id.toString()}`);
    if(!response.ok) {
        console.log(`Ha ocurrido un error`);
    }
    let name = await response.json();

    respuesta.hidden = false;

    respuesta.innerHTML += `El correo de este id es: <b>${name.data.email}</b>` ;

}


/*---- POST *----*/

//PROMISES

const makePostRequest = body => {
    fetch(`https://reqres.in/api/users`, {
        method : "POST",
        body : JSON.stringify(body),
        headers: {"Content-Type":"application/json"}
    })
    .then(res=>res.json())
    .then(res=> console.log(res));
}

// IMAGE

const imagen = document.querySelector('.img');

const readImage = (url) => {
    fetch(url)
        .then(res=>res.blob())
        .then(img=>imagen.src = URL.createObjectURL(img));
}

readImage("ERROR.png");


