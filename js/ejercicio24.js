const generarColorAleatorio = () => {
    const letras = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
};

// Función cambiar color fondo
const cambiarColorFondo = () => {
    const nuevoColor = generarColorAleatorio();
    const colorActualElement = document.getElementById("colorActual");
    
    // Cambiar color body
    document.body.style.backgroundColor = nuevoColor;
    
    // Actualizar texto
    colorActualElement.textContent = "Color actual: "+ nuevoColor;

    console.log("El color de fondo ha cambiado a: " + nuevoColor);
};


const boton = document.getElementById("cambiarColor");
boton.addEventListener("click", cambiarColorFondo);

export { cambiarColorFondo, generarColorAleatorio };