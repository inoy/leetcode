export {}

function frequencySort(nums: number[]): number[] {
  const counts: number[] = [0]
  nums.forEach(num => {
    !counts[num] ? counts[num] = 1 : ++counts[num]
  })
  // console.log(counts)
  nums.sort((a, b) => {
    if (counts[a] > counts[b]) return 1
    if (counts[a] === counts[b] && a < b) return 1
    return -1
  })
  // console.log(nums)
  return nums
}

console.log(frequencySort([1, 1, 2, 2, 2, 3]))
console.log(frequencySort([2, 3, 1, 3, 2]))
console.log(frequencySort([-1, 1, -6, 4, 5, -6, 1, 4, 1]))
