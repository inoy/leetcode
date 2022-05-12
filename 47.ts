export {}

function permuteUnique(nums: number[]): number[][] {
  const ret: number[][] = []
  const numCounts: { [key: number]: number } = []
  nums.forEach(num => numCounts[num] ? numCounts[num]++ : numCounts[num] = 1)

  const permute = (depth: number, r: number[]): void => {
    if (depth === nums.length) {
      ret.push([...r])
    }

    Object.keys(numCounts).map(Number).forEach(num => {
      if (numCounts[num] > 0) {
        r.push(num)
        numCounts[num]--

        permute(depth + 1, r)

        r.pop()
        numCounts[num]++
      }
    })
  }
  permute(0, [])

  return ret
}

console.log(permuteUnique([1, 1, 2]))
