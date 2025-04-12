let nombres = ["pablo", "noelia" , "celeste" , "majo" , "fabiana" , "ayme"];

let nombreMasLargo = nombres[0];

for (let i = 1 ; i < nombres.length ; i++){
    if (nombres[i].length > nombreMasLargo.length) {
        nombreMasLargo = nombres[i];
    }
}
console.log("El nombre mas largo es: " + nombreMasLargo);