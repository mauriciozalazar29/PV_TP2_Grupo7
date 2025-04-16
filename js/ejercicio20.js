// Mapeo de países a capitales
const paisesCapitales = {
    "Argentina": "Buenos Aires",
    "Brasil": "Brasilia",
    "Canadá": "Ottawa",
    "Colombia": "Bogotá",
    "México": "Ciudad de México",
    "Perú": "Lima",
    "Estados Unidos": "Washington D.C.",
    "Chile": "Santiago"
};

// Mapeo inverso de capitales a países
const capitalesPaises = {};
for (const pais in paisesCapitales) {
    capitalesPaises[paisesCapitales[pais]] = pais;
}

// Obtenemos referencias a los elementos del DOM
const selectPaises = document.getElementById("paises");
const selectCapitales = document.getElementById("capitales");
const resultado = document.getElementById("resultado");

// Función para actualizar la visualización del resultado
function actualizarResultado(pais, capital) {
    resultado.innerHTML = `
        <p>País seleccionado: <strong>${pais}</strong></p>
        <p>Capital: <strong>${capital}</strong></p>
    `;
}

// Agregamos el evento change para el select de países
selectPaises.addEventListener("change", function() {
    const paisSeleccionado = this.value;
    if (paisSeleccionado) {
        const capitalCorrespondiente = paisesCapitales[paisSeleccionado];
        selectCapitales.value = capitalCorrespondiente;
        actualizarResultado(paisSeleccionado, capitalCorrespondiente);
        console.log("País seleccionado: " + paisSeleccionado+ "Capital: " + capitalCorrespondiente);
    }
});

// Agregamos el evento change para el select de capitales
selectCapitales.addEventListener("change", function() {
    const capitalSeleccionada = this.value;
    if (capitalSeleccionada) {
        const paisCorrespondiente = capitalesPaises[capitalSeleccionada];
        selectPaises.value = paisCorrespondiente;
        actualizarResultado(paisCorrespondiente, capitalSeleccionada);
        console.log("Capital seleccionada: " + capitalSeleccionada + "País: " + paisCorrespondiente);
    }
});

export { capitalesPaises};