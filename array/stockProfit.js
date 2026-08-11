function stockProfit(prices) {
    let minPrice = prices[0];
    let maxProfit = 0
    for(let i = 0;i<prices.length; i++) {
        if(prices[i] < minPrice) {
            minPrice = prices[i];
        }
        if(prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }
    return maxProfit;

}

console.log(stockProfit([7,1,5,3,6,4]))