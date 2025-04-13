const horas = 2;
const minutos = 30;

const convertirASegundos = (horas, minutos) => {
  const horasEnSegundos = horas * 60 * 60;
  const minutosEnSegundos = minutos * 60;
  return horasEnSegundos + minutosEnSegundos;
};

console.log(+horas + " horas y " + minutos + " minutos son " + convertirASegundos(horas, minutos) + " segundos.");