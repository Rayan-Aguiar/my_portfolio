const title = document.querySelector('.digitando');

function activeWorld(element){
    const arrText = element.innerHTML.split('');
    element.innerHTML = '';
    arrText.forEach((letra, i) =>{
        setTimeout(()=>{
            element.innerHTML += letra;
        }, 75 * i);
    })
}

activeWorld(title);
