const nombres = ["Ana", "Juan", "Sebastián", "Patricia", "Alejandro", "Luz"];

const encontrarNombreMasLargo = (nombres) => {
  let nombreMasLargo = "";
  
  for (let i = 0; i < nombres.length; i++) {
    if (nombres[i].length > nombreMasLargo.length) {
      nombreMasLargo = nombres[i];
    }
  }
  
  return nombreMasLargo;
};

console.log("El nombre más largo es: " + encontrarNombreMasLargo(nombres));
