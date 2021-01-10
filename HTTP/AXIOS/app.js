const boton = document.querySelector('.btn');
const textInfo = document.querySelector('.text-info');

boton.addEventListener('click', (e)=> {
    let url = `https://reqres.in/api/users/`;
    id = "4";
    url = url.concat(id);
    doRequestAsync(url);
})

const doRequestAsync = async(url) => {
    let response = await axios.get(url);
    let text = await response.data;
    textInfo.hidden = false;
    textInfo.innerHTML = text;
}