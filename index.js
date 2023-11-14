function añadirObjeto(){
    //Recupero los valores de los elementos del formulario
    let objeto=document.getElementById('objeto').value;
    let color=document.getElementById('color').value;
    //Recupera el div donde se va añadir el elemento (elemento padre)
    let lista=document.getElementById('lista_objetos');
    let elemento_lista=document.createElement('li');
    //Contenido que va dentro del elemento que se muestra en la lista
    elemento_lista.innerHTML=objeto+" "+color;
    //Añade elemento dentro del padre en este caso el div
    lista.appendChild(elemento_lista);
}
    
document.getElementById('enviar').addEventListener("click", añadirObjeto);