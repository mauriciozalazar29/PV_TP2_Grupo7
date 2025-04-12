<<<<<<< HEAD
let edades = [7, 18 , 21 , 30 ,45 , 50 , 60, 80];

let suma = 0;

for (let i= 0; i < edades.length ; i++){
    suma += edades[i];
}
let promedio = Math.round(suma / edades.length);

console.log("El promedio de las edades es: " + promedio);
=======
const edades = [25, 30, 22, 40, 18, 35, 28, 32];

const Promedio = (array) => {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
      suma += array[i];
    }
    return Math.round(suma / array.length);
  };
  
  console.log("El promedio de las edades es: " + Promedio(edades));
>>>>>>> cf60b92fe9b9816db24215efbe4dff094fdb9106
