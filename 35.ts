export {}

function searchInsert(nums: number[], target: number): number {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    let mid = Math.trunc((left + right) / 2)
    console.log({left, right, mid})
    if (nums[mid] === target) return mid
    else if (nums[mid] > target) right = mid - 1
    else left = mid + 1
  }
  return left
}

// console.log(searchInsert([1, 3, 5, 6], 5))
// console.log(searchInsert([1, 3, 5, 6], 2))
// console.log(searchInsert([1, 3, 5, 6], 7))
// console.log(searchInsert([1, 3, 5, 6], 0))
// console.log(searchInsert([1, 3], 2))
console.log(searchInsert([1, 2, 4, 6, 7], 3))
