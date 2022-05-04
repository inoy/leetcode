export {}

function findFinalValue(nums: number[], original: number): number {
  let sets = new Set()
  nums.forEach(value => sets.add(value))
  if (!sets.has(original)) return original
  while (true) {
    if (!sets.has(original *= 2)) break
  }
  return original
}

console.log(findFinalValue([5, 3, 6, 1, 12], 3))
console.log(findFinalValue([2, 7, 9], 4))
console.log(findFinalValue([2], 2))
