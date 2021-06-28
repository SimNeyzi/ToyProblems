const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];

function mergeArrays(myArray, alicesArray) {

  const mergedArray = [];

  let currentMyArrayIndex = 0;
  let currentAlicesArrayIndex = 0;
  let mergedArrayIndex = 0;



  while (mergedArrayIndex < (myArray.length + alicesArray.length)) {

    const myArrayExhausted = currentMyArrayIndex >= myArray.length;
    const alicesArrayExhausted = currentAlicesArrayIndex >= alicesArray.length;

    if (!myArrayExhausted && (alicesArrayExhausted ||
      (myArray[currentMyArrayIndex] < alicesArray[currentAlicesArrayIndex]))) {
        mergedArray[mergedArrayIndex] = myArray[currentMyArrayIndex]
        currentMyArrayIndex++;
      } else {
        mergedArray[mergedArrayIndex] = alicesArray[currentAlicesArrayIndex]
        currentAlicesArrayIndex++;
      }
    mergedArrayIndex++;
  }

  return mergedArray;
}