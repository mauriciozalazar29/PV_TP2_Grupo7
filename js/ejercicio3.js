const calcularAreaCirculo = (radio) => {
    const area = Math.PI * radio * radio;
    return area;
  };
  const radio = 7.5;
  console.log("El área del círculo con radio "+ radio + " es: " + calcularAreaCirculo(radio));
  