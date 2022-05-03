export {}

function findUnsortedSubarray(nums: number[]): number {
  console.log(`  nums=${nums}`)
  const sorted = [...nums].sort((a, b) => a - b)
  console.log(`sorted=${sorted}`)
  let start = -1
  let end = -1
  sorted.forEach((value, index) => {
    if (value !== nums[index]) {
      console.log(`index=${index}, nums=${nums[index]}, sorted=${value}`)
      if (start === -1) {
        start = index
      } else {
        end = index
      }
    }
  })
  if (start === -1) return 0
  return end - start + 1
}

console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]))
console.log(findUnsortedSubarray([1, 2, 3, 4]))
console.log(findUnsortedSubarray([0]))
