getMaxProfit(stockPrices) {
  if (stockPrices.length < 2) {
    throw new Error('getting a profit requires at least 2 prices')
  }

  let minPrice = stockPrices[0];
  let maxProfit = stockPrices[1] - stockPrices[0];

  for (let i = 1; i < stockPrices.length; i++) {
    let currentPrice = stockPrices[i];

    let potentialProfit = currentPrice - minPrice
    maxProfit = Math.max(maxProfit, potentialProfit);
    minPrice = Math.max(minPrice, currentPrice);
  }

  return maxProfit;

}