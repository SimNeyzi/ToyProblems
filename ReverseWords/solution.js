function reverseWords(message) {

  // helper func to reverse chars
  function reverseChars(message, leftIndex, rightIndex) {

    while (leftIndex < rightIndex) {
      const store = message[leftIndex];

      message[leftIndex] = message[rightIndex];
      message[rightIndex] = store;
      leftIndex++;
      rightIndex--;
    }
  }

  reverseChars(message, 0, message.length - 1);

  // find start and end indexes for words
  let currentWordStartIndex = 0;

  for (let i = 0; i <= message.length; i++) {
    if(message[i] === ' ' || i === message.length) {
      reverseChars(message, currentWordStartIndex, i - 1);
      // new start index
      currentWordStartIndex = i + 1
    }
  }

}
