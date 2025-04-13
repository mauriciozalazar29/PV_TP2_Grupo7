const edades = [23, 18, 35, 42, 27, 19, 31, 56];

const calcularPromedio = (array) => {
  let suma = 0;
  for (let i = 0; i < array.length; i++) {
    suma += array[i];
  }
  return Math.round(suma / array.length);
};
console.log("El promedio de las edades es: " + calcularPromedio(edades));