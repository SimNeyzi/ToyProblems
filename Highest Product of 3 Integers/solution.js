function highestProductOf3 (inputArray) {

  if (inputArray.length < 3) {
    throw new Error('input array has less than 3 elements');
  }

  let highest = Math.max(inputArray[0], inputArray[1]);
  let lowest = Math.min(inputArray[0], inputArray[1]);
  let highestProductOf2 = inputArray[0] * inputArray[1];
  let lowestProductOf2 = inputArray[0] * inputArray[1];
  let highestProductOf3 = inputArray[0] * inputArray[1] * inputArray[2];

  for (let i = 2; i < inputArray.length; i++) {
    let currentInt = inputArray[i];

    highestProductOf3 = Math.max(highestProductOf3, highestProductOf2 * currentInt, lowestProductOf2 * currentInt);
    highestProductOf2 = Math.max(highestProductOf2, highest * currentInt, lowest * currentInt);
    lowestProductOf2 = Math.min(lowestProductOf2, lowest * currentInt, highest * currentInt);

    highest = Math.max(highest, currentInt);
    lowest = Math.min(lowest, currentInt);
  }

  return highestProductOf3;
}