const actualizarTextoYFondo = (event) => {
    const textoIngresado = event.target.value;
    const textoSalida = document.getElementById("textoSalida");
    const contenedorSalida = document.getElementById("contenedorSalida");
    const contador = document.getElementById("contador");
    
    // Actualizar texto
    if (textoIngresado.trim() === "") {
        textoSalida.textContent = "El texto aparecerá aquí mientras escribes...";
        contador.textContent = "Caracteres: 0";
    } else {
        textoSalida.textContent = textoIngresado;
        contador.textContent = "Caracteres: " + textoIngresado.length;
    }
    
    // Cambiar fondo
    if (textoIngresado.length > 20) {
        contenedorSalida.classList.add("background-changed");
    } else {
        contenedorSalida.classList.remove("background-changed");
    }
};

const inputTexto = document.getElementById("textoUsuario");
inputTexto.addEventListener("input", actualizarTextoYFondo);

export { actualizarTextoYFondo };