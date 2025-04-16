const paisesCapitales = {
    "Argentina": "Buenos Aires",
    "Brasil": "Brasilia",
    "Chile": "Santiago",
    "México": "Ciudad de México",
    "Perú": "Lima",
    "Uruguay": "Montevideo"
  };
  
  const selectPais = document.querySelector("#pais");
  const selectCapital = document.querySelector("#capital");
  
  // Cuando cambia el país
  selectPais.addEventListener("change", () => {
    const paisSeleccionado = selectPais.value;
    const capitalCorrespondiente = paisesCapitales[paisSeleccionado];
  
    // Actualizar capital
    selectCapital.value = capitalCorrespondiente;
  
    console.log(`País seleccionado: ${paisSeleccionado} - Capital: ${capitalCorrespondiente}`);
  });
  
  // Cuando cambia la capital
  selectCapital.addEventListener("change", () => {
    const capitalSeleccionada = selectCapital.value;
    const paisCorrespondiente = Object.keys(paisesCapitales).find(
      pais => paisesCapitales[pais] === capitalSeleccionada
    );
  
    // Actualizar país
    selectPais.value = paisCorrespondiente;
  
    console.log(`Capital seleccionada: ${capitalSeleccionada} - País: ${paisCorrespondiente}`);
  });
  