export {}

function countVowelStrings(n: number): number {
  let a = 1, e = 1, i = 1, o = 1, u = 1
  for (let j = 1; j < n; j++) {
    o = o + u
    i = i + o
    e = e + i
    a = a + e
  }
  return a + e + i + o + u
}

console.log((countVowelStrings(2)))
