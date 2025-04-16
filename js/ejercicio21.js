const actualizarTexto = (event) => {
    const textoIngresado = event.target.value;
    const textoSalida = document.getElementById("textoSalida");
    
    if (textoIngresado.trim() === "") {
        textoSalida.textContent = "El texto aparecerá aquí mientras escribes...";
    } else {
        textoSalida.textContent = textoIngresado;
    }
};

const inputTexto = document.getElementById("textoUsuario");
inputTexto.addEventListener("input", actualizarTexto);


export { actualizarTexto };