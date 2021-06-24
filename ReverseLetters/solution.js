// O(n) time and O(1) space
function reverse(arrayOfChars) {

  // calculate how many times to swap numbers
  const times = Math.floor(arrayOfChars.length / 2)

  for (let i = 0; i <= times; i++) {
    // store first and last values
    const currentChar = arrayOfChars[i];
    const lastChar = arrayOfChars[arrayOfChars.length-i-1];
    //swap
    arrayOfChars[i] = lastChar;
    arrayOfChars[arrayOfChars.length-i-1] = currentChar;
  }
  return arrayOfChars;
}