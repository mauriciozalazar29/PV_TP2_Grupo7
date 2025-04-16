const actualizarSeleccion = (event) => {
    const lenguajeSeleccionado = event.target.value;
    const elementoSeleccion = document.getElementById("seleccion");
    
    // Actualizar el texto en la página
    elementoSeleccion.textContent = "Has seleccionado: " + lenguajeSeleccionado;
   // Mostrar en la consola
    console.log("El usuario ha seleccionado: " + lenguajeSeleccionado);
};

// Obtener todos los radio buttons y agregar el evento change
const radios = document.querySelectorAll("input[name=\"lenguaje\"]");
radios.forEach(radio => {
    radio.addEventListener("change", actualizarSeleccion);
});

export { actualizarSeleccion };