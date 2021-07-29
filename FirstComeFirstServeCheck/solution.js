function firstComeFirstServe (takeOutOrders, dineInOrders, servedOrders) {
  if (servedOrders.length !== takeOutOrders.length + dineInOrders.length) {
    throw new Error('served orders don\'t match');
  }

  let takeOutIndex = 0;
  let dineInIndex = 0;

  for (let i = 0; i < servedOrders.length; i++) {
    let currentServedOrder = servedOrders[i];

    if (currentServedOrder === takeOutOrders[takeOutIndex]) {
      takeOutIndex++;
    } else if (currentServedOrder === dineInOrders[dineInIndex]) {
      dineInIndex++;
    } else {
      return false;
    }
  }
  return true;
}