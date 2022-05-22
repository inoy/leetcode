export {}

function countSubstrings(s: string): number {
  let ret = 0

  const p = (left: number, right: number): void => {
    while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
      ret++
      left--
      right++
    }
  }

  for (let i = 0; i < s.length; i++) {
    p(i, i)
    p(i, i + 1)
  }

  return ret
}

console.log(countSubstrings('abc'))