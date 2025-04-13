const calcularMayor = (numero1, numero2) => {
    // Esta función recibe dos números y muestra en un alert cuál es mayor o si son iguales.
    if ( numero1 > numero2 ) {
        alert(numero1 + " es mayor que " + numero2);
    } else if (numero2 > numero1){
        alert(numero2 + " es mayor que " + numero1);
    }else{
        alert("Los numeros " + numero1 + " y " + numero2 + " son iguales");
    }
}
calcularMayor(1,10);