export {}

function maximumWealth(accounts: number[][]): number {
  return accounts.map(account =>
    account.reduce((previousValue, currentValue) => previousValue + currentValue)
  ).sort((a, b) => {
    if (a > b) return -1
    return 1
  })[0]
}

console.log(maximumWealth([[1, 2, 3], [3, 2, 1]]))
console.log(maximumWealth([[1, 5], [7, 3], [3, 5]]))
console.log(maximumWealth([[2, 8, 7], [7, 1, 3], [1, 9, 5]]))
