const name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const btnSend = document.getElementById('btn-send');
const result = document.querySelector('.result');

btnSend.addEventListener('click', (e)=>{
    let error = validateFields();
    if(error[0]) {
        result.innerHTML = error[1];
        result.classList.remove("success");
        result.classList.add("failed");
    } else {
        result.innerHTML = "Envío correcto";
        result.classList.remove("failed");
        result.classList.add("success");
    }
});

//ClassList---lista de clases --- 

//TODO: Expresiones regulares!

const validateFields = () => {
    let error = [];
    if(name.value.length <5 || name.length >40) {
        error[0] = true;
        error[1] = "El nombre debe tener entre 5 y 40 caracteres";
        return error; 
    } else if(email.value.length < 5 ||
              email.value.length > 40 ||
              email.value.indexOf("@") == -1 ||
              email.value.indexOf(".") == -1) {
                 error[0] = true;
                 error[1] = "El mail es inválido";
                 return error;
    } else if(subject.value.length <4 || subject.value.length > 40) {
        error[0] = true;
        error[1] = "La materia no existe";
        return error;
    }
    error[0] = false
    return error;

}