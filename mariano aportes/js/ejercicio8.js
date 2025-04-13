
const calcularMayor = (numero1 , numero2) => {
    if (numero1 > numero2) {
        alert("El mayor es: " + numero1);
    }
    else if (numero2 > numero1) {
        alert("El mayor es: " + numero2);
    }
    else {
        alert("Son iguales");
    }
}
calcularMayor(1,10);