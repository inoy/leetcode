export {}

function sortedSquares(nums: number[]): number[] {
  return nums.map(value => value * value).sort((a, b) => a - b)
}

console.log(sortedSquares([-4, -1, 0, 3, 10]))
