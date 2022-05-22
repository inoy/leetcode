export {}

function coinChange(coins: number[], amount: number): number {
  const minCoins: number[] = new Array(amount + 1).fill(Infinity)
  minCoins[0] = 0
  for (let amt = 1; amt <= amount; amt++) {
    coins.forEach(coin => {
      if (coin <= amt)
        minCoins[amt] = Math.min(minCoins[amt], minCoins[amt - coin] + 1)
    })
  }
  return minCoins[amount] === Infinity ? -1 : minCoins[amount]
}

// console.log(coinChange([5, 2, 1, 2, 5], 11))
// console.log(coinChange([1], 0))
console.log(coinChange([186, 419, 83, 408], 6249))
