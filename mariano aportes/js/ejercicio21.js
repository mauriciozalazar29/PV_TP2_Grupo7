const inputTexto = document.querySelector("#campoTexto");
const textoResultado = document.querySelector("#textoResultado");

inputTexto.addEventListener("input", () => {
  textoResultado.textContent = inputTexto.value || "Tu texto aparecerá acá.";
});
