

function calculateSumAndProduct(numbers) {
    const suma = 0;
    const product = 1;
  
    for (const i = 0; i < numbers.length; i++) {
      suma += numbers[i];
      product *= numbers[i];
    }
  
    return { suma, product };
  }
  
  const numbers = [1, 2, 3, 4];
  const result = calculateSumAndProduct(numbers);
  
  console.log(`The sum is ${result.suma}.`);
  console.log(`The product is ${result.product}.`);
