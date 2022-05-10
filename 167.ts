export {}

function twoSum(numbers: number[], target: number): number[] {
  let l = 0
  let r = numbers.length - 1
  while (l < r) {
    const s = numbers[l] + numbers[r]
    if (s === target) return [l + 1, r + 1]
    else if (s > target) --r
    else ++l
  }
  return []
}

console.log(twoSum([2, 7, 11, 15], 9))
