const areacirculo = (radio) => Math.PI * radio * radio;

let radio = 7.5;
const area = areacirculo(radio);

const calcularAreaCirculo = (radio) => {
    const area = Math.PI * Math.pow(radio, 2);
    return area;
  };
  
  let radioCirculo = 7.5;
  const areaCirculo = calcularAreaCirculo(radioCirculo);
  console.log("El área del círculo con radio: " + radioCirculo,"es: ",areaCirculo.toFixed(2));
  