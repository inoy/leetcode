export {}

/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  k %= nums.length

  const reverse = (i: number, j: number) => {
    console.log({msg: 'start', i, j, nums})
    while (i < j) {
      const tmp = nums[i]
      nums[i] = nums[j]
      nums[j] = tmp
      ++i
      --j
    }
    console.log({msg: 'end', i, j, nums})
  }

  reverse(0, nums.length - 1)
  reverse(0, k - 1)
  reverse(k, nums.length - 1)
}

let nums = [1, 2, 3, 4, 5, 6, 7]
rotate(nums, 3)
console.log({nums})
