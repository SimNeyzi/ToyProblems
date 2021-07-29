// i: array of integers
// o: array of products (integers)
// e: empty array, array with 1 item

function getProductsOfAllIntsExceptAtIndex(arrayOfInts) {

  if(arrayOfInts.length < 2) {
    throw new Error('has less than 2 items')
  }

  let products = [];


  for (let i = 0; i < arrayOfInts.length; i++) {
    let copyOfArr = arrayOfInts.slice()

    copyOfArr[i] = 1;
    let product = 1;

    for (let j = 0; j < copyOfArr.length; j++) {
      product *= copyOfArr[j];
    }
    products.push(product)
  }
  return products;
}