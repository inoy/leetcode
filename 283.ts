export {}

/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  for (let i = 0, j = 0; i < nums.length; i++) {
    if (nums[i] !== 0) nums[j++] = nums[i]
    if (i >= j) nums[i] = 0
  }
}

const nums = [0, 1, 0, 3, 12]
// const nums = [0]
moveZeroes(nums)
console.log({nums})
