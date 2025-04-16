const radios = document.querySelectorAll('input[name="lenguaje"]');
const resultado = document.getElementById("resultado");

radios.forEach(radio => {
  radio.addEventListener("change", () => {
    const valor = radio.value;
    resultado.textContent = `Lenguaje seleccionado: ${valor}`;
    console.log(`Seleccionaste: ${valor}`);
  });
});
