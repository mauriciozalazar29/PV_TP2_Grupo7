<<<<<<< HEAD

const calcularMayor = (numero1 , numero2) => {
    if (numero1 > numero2) {
        alert("El mayor es: " + numero1);
    }
    else if (numero2 > numero1) {
        alert("El mayor es: " + numero2);
    }
    else {
        alert("Son iguales");
=======
const calcularMayor = (numero1, numero2) => {
    if ( numero1 > numero2 ) {
        alert(numero1 + " es mayor que " + numero2);
    } else if (numero2 > numero1){
        alert(numero2 + " es mayor que " + numero1);
    }else{
        alert("Los numeros " + numero1 + " y " + numero2 + " son iguales");
>>>>>>> cf60b92fe9b9816db24215efbe4dff094fdb9106
    }
}
calcularMayor(1,10);