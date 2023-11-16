function agregarAlumno() {
    //Recuperamos los datos desde el formulario
    let curso = document.getElementById('curso').value;
    let nombre = document.getElementById('nombre').value;
    let edad = document.getElementById('edad').value;
    //Los datos recuperados se almacenan en un string
    let alumno = nombre + ', Edad: ' + edad + ' años, ' + 'Curso: ' + curso;
    //Recuperamos el elemento padre ul
    let lista_alumnos = document.getElementById('lista_alumnos');
    //Creamos un elemento tipo li 
    let elemento_lista = document.createElement('li');
    //Añadimos el elemento li al padre ul
    lista_alumnos.appendChild(elemento_lista);
    /*Incluye el contenido almacenado en la variable alumno dentro de elemento_lista 
    para mostrar la información en la página web*/
    elemento_lista.innerHTML = alumno;
    //Se llama a la función navegarElementos que va actuar sobre los elementos creados
    navegarElementos();
}

function eliminarAlumno() {
    document.querySelector('li').remove();
}

document.getElementById('enviar').addEventListener("click", agregarAlumno);
document.getElementById('eliminar').addEventListener("click", eliminarAlumno);

function navegarElementos() {
    //Recupero todos los elementos li añadidos dentro del DOM
    const elementos = document.querySelectorAll('li')
    /*Se recorre cada elemento y cada vez que haga click en un elemento llamo a una función anónima 
    que va hacer una serie de modificiaciones en los elementos de la lista*/
    elementos.forEach((elemento) => {
        elemento.addEventListener("click", function () {
            //Recupero el elemento anterior y siguiente al elemento seleccionado
            const siguiente=elemento.nextElementSibling;
            const anterior=elemento.previousElementSibling;
            //Si los elementos existen, se aplican los cambios modificando color de fuente y color de fondo del elemento
            if(siguiente){
                siguiente.style.backgroundColor="blue";
                siguiente.style.color="white";
            }
            if(anterior){
                anterior.style.backgroundColor="orange";
                anterior.style.color="white";
            }
        });
    });
}