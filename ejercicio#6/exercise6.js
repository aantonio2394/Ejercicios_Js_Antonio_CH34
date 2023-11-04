

function algoritmoBurbuja(arr) {
    const n = arr.length;
    let intercambio;
    do {
      intercambio = false;
      for (const i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          // Intercambiar elementos si están en el orden incorrecto
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          intercambio = true;
        }
      }
    } while (intercambio);
  
    return arr;
  }
  
  const entrada = [3, 6, 12, 5, 100, 1];
  const salida = algoritmoBurbuja(entrada);
  
  console.log(salida);