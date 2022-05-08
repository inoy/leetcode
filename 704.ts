export {}

function search(nums: number[], target: number): number {
  return nums.findIndex(value => value === target)!
}

console.log(search([-1, 0, 3, 5, 9, 12], 9))
