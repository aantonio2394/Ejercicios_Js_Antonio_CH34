



function doubleArrayValues(arr) {
    const doubledArr = [];
    for (const i = 0; i < arr.length; i++) {
      doubledArr.push(arr[i] * 2);
    }
    console.log(doubledArr);
  }
  
  // Example usage:
  const inputArray = [1, 2, 4, 5];
  doubleArrayValues(inputArray);