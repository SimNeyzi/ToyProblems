// O(n) time, and O(n) space

function canTwoMoviesFillFlight(movieLengths, flightLength) {

  const seenMovieLength = new Set();

  for (let i = 0; i < movieLengths.length; i++) {

    const currentMovieLength = movieLengths[i];
    const secondMovieLength = flightLength - currentMovieLength;

    if (seenMovieLength.has(secondMovieLength)) {
      return true
    }

    seenMovieLength.add(currentMovieLength)
  }


  return false;
}