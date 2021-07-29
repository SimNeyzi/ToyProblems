function getRandom(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

function shuffle(array) {

  if (array.length <= 1) return;

  for (let i = 0; i < array.length; i++) {
    let current = array[i]
    const randomIndex = getRandom(i, array.length - 1)
    const previousValue = array[randomIndex];
    array[randomIndex] = current;
    array[i] = previousValue
  }

  return array;
}