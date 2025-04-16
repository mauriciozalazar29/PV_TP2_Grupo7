const input = document.querySelector("#campoTexto");
const resultado = document.querySelector("#textoResultado");

input.addEventListener("input", () => {
  const texto = input.value;
  resultado.textContent = texto || "El texto aparecerá acá.";

  if (texto.length > 20) {
    resultado.style.backgroundColor = "#ffcdd2"; // fondo rojo claro
  } else {
    resultado.style.backgroundColor = "#eee"; // fondo gris claro
  }
});
