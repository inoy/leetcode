export {}

function combinationSum3(k: number, n: number): number[][] {
  const ret: number[][] = []

  const combination = (i: number, c: number[], r: number) => {
    if (c.length > k) return
    if (c.length === k && r === 0) {
      ret.push(c)
      return
    }
    for (; i <= 9; i++) {
      if (r - i >= 0) {
        combination(i + 1, [...c, i], r - i)
      }
    }
  }
  combination(1, [], n)

  return ret
}

// console.log(combinationSum3(3, 7))
console.log(combinationSum3(3, 9))
