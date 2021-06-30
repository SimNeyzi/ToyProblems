// O(n) time

function hasPalindromePermutation(theString) {
  const hasPair = new Set();

  for (let char of theString) {
    if (hasPair.has(char)) {
      hasPair.delete(char);
    } else {
      hasPair.add(char);
    }
  }
  return hasPair.size <= 1;
}