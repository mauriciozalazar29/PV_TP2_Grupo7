const calcularMayor = (numero1, numero2) => {
    if ( numero1 > numero2 ) {
        alert(numero1 + " es mayor que " + numero2);
    } else if (numero2 > numero1){
        alert(numero2 + " es mayor que " + numero1);
    }else{
        alert("Los numeros " + numero1 + " y " + numero2 + " son iguales");
    }
}
calcularMayor(1,10);