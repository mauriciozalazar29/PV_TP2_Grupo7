const btn = document.getElementById("cambiarColor");

const colores = ["#ff9999", "#99ccff", "#ccffcc", "#f9f871", "#e1bee7", "#ffc107"];

btn.addEventListener("click", () => {
  const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
  document.body.style.backgroundColor = colorAleatorio;
  console.log("Color de fondo cambiado a: ${colorAleatorio}");
});
