function calculateProfit(sellingPrice, CostPrice, unitsSold){
   let profit = 0
   profit = (sellingPrice * unitsSold) - (CostPrice * unitsSold)
   return profit
}

console.log(calculateProfit(300, 200, 3))