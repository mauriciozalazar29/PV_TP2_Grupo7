<<<<<<< HEAD
let nombres = ["pablo", "noelia" , "celeste" , "majo" , "fabiana" , "ayme"];

let nombreMasLargo = nombres[0];

for (let i = 1 ; i < nombres.length ; i++){
    if (nombres[i].length > nombreMasLargo.length) {
        nombreMasLargo = nombres[i];
    }
}
console.log("El nombre mas largo es: " + nombreMasLargo);
=======
const nombres = ["Ana", "Juan", "Lazaro", "Danila", "Alejandro", "Exequiel"];

const nombreMasLargo = (nombres) => {
  let nombreMasLargo = "";
  
  for (let i = 0; i < nombres.length; i++) {
    if (nombres[i].length > nombreMasLargo.length) {
      nombreMasLargo = nombres[i];
    }
  }
  return nombreMasLargo;
};

console.log("El nombre más largo es: " + NombreMasLargo(nombres));