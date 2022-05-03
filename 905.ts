export {}

function sortArrayByParity(nums: number[]): number[] {
  return nums.sort((a) => {
    if (a % 2 === 0) return -1
    return 1
  })
}

console.log(sortArrayByParity([3, 1, 2, 4]))
console.log(sortArrayByParity([0]))