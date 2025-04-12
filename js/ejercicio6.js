let edades = [7, 18 , 21 , 30 ,45 , 50 , 60, 80];

let suma = 0;

for (let i= 0; i < edades.length ; i++){
    suma += edades[i];
}
let promedio = Math.round(suma / edades.length);

console.log("El promedio de las edades es: " + promedio);
