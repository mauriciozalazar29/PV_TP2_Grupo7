const mostrarDatos = () => {
    const nombreInput = document.querySelector("#nombre");
    const apellidoInput = document.querySelector("#apellido");
    const libretaInput = document.querySelector("#libreta");
    
    const nombre = nombreInput.value;
    const apellido = apellidoInput.value;
    const libreta = libretaInput.value;
    
   alert("Los datos ingresados son:\nNombre: " + nombre + "\nApellido: " + apellido + "\nLibreta Universitaria: " +"APU" +libreta);
};


const boton = document.querySelector('#mostrarDatos');
boton.addEventListener('click', mostrarDatos);

export { mostrarDatos };