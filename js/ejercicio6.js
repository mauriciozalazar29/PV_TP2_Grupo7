const edades = [25, 30, 22, 40, 18, 35, 28, 32];

const Promedio = (array) => {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
      suma += array[i];
    }
    return Math.round(suma / array.length);
  };
  
  console.log("El promedio de las edades es: " + Promedio(edades));