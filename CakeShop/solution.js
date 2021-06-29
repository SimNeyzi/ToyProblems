// O(n) time and O(1) space

function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {

  let isTrue = true;
  let currentTakeOutIndex = takeOutOrders.length - 1;
  let currentDineInIndex = dineInOrders.length - 1;
  let currentServedOrdersIndex = servedOrders.length - 1;

  while (currentServedOrdersIndex >= 0) {
    if (dineInOrders[currentDineInIndex] && (servedOrders[currentServedOrdersIndex] === dineInOrders[currentDineInIndex])) {
      currentDineInIndex--;
    } else if (takeOutOrders[currentTakeOutIndex] && (servedOrders[currentServedOrdersIndex] === takeOutOrders[currentTakeOutIndex])) {
      currentTakeOutIndex--;
    } else {
      isTrue = false;
    }
    currentServedOrdersIndex--;
  }
  return isTrue;
}