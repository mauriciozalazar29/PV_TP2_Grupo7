const cambiarTexto = () => {
    const parrafo = document.getElementById("texto");
    parrafo.textContent = "¡El texto ha sido cambiado! estas aprendiendo JavaScript";
};

const boton = document.getElementById("botonCambiar");
boton.addEventListener("click", cambiarTexto);

// Exportar función 
export { cambiarTexto };